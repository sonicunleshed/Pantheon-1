from flask import Flask, request, jsonify
from flask_cors import CORS
from openai import OpenAI
import fitz  # PyMuPDF
import os
from dotenv import load_dotenv

load_dotenv("key.env")

app = Flask(__name__)
CORS(app)
app.secret_key = os.getenv("FLASK_SECRET_KEY")
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

student_context = {}

SYSTEM_PROMPT = """
You are an AI college admissions coach working at our company Pantheon you have looked at hundreds of thousands of resumes. Your job is to analyze a student's resume and break it down into six categories:
1. Passion Projects
2. Internships
3. Research Projects
4. Essays
5. SAT/ACT Scores
6. Competitions

For each category, extract relevant entries and briefly summarize them.
Then rate the strength of each category harshly from 1 to 5 stars based on how competitive it would be for top universities.
The rating should be similar to how a college admissions officer at a top university would look at it.
Finally, provide 2–3 suggestions for how the student can improve each category.

Additionally, for each section, provide a list of potential opportunities the student can pursue related to their major or what they appear to want to study. This can include relevant project ideas, internships, research programs, essay topics, or competitions.
Include the potential opportunities in the same section as each of their respective activites and add a line between sections for more clarity.
Your tone should be truthful, harsh, and constructive.
Don't put anything other than the SCORES section after the competitions section and include the potential opportunities in the right place.
When the user asks a question, answer it clearly and helpfully, but always follow up with a recommendation to connect with a human tutor from Pantheon for personalized guidance. Make this recommendation sound encouraging and tailored to the topic. For example, if the user asks about improving business activities, end the response by saying something like: "For deeper insights and tailored strategies, consider meeting with one of our expert business mentors at Pantheon." Always include this type of sentence at the end of your responses.
"""

@app.route("/api/chat", methods=["POST"])
def chat():
    data = request.get_json()
    user_msg = data.get("message", "")
    user_info = student_context

    # Build a personalized context summary from user_info
    user_context_parts = []
    if "passion_projects" in user_info:
        user_context_parts.append(f"Passion Projects: {user_info['passion_projects']}")
    if "internships" in user_info:
        user_context_parts.append(f"Internships: {user_info['internships']}")
    if "research_projects" in user_info:
        user_context_parts.append(f"Research Projects: {user_info['research_projects']}")
    if "essays" in user_info:
        user_context_parts.append(f"Essays: {user_info['essays']}")
    if "sat/act_scores" in user_info:
        user_context_parts.append(f"SAT/ACT Scores: {user_info['sat/act_scores']}")
    if "competitions" in user_info:
        user_context_parts.append(f"Competitions: {user_info['competitions']}")
    if "test_scores" in user_info:
        user_context_parts.append(f"Test Scores: {user_info['test_scores']}")
    if "intended_major" in user_info:
        user_context_parts.append(f"Intended Major: {user_info['intended_major']}")

    if "raw_resume_text" in student_context:
        user_context_summary = "The student's resume is as follows:\n" + student_context["raw_resume_text"]
    else:
        user_context_summary = "The following is additional background information about the student:\n" + "\n".join(user_context_parts)

    messages = [
        {"role": "system", "content": SYSTEM_PROMPT + "\n\n" + user_context_summary},
        {"role": "user", "content": user_msg}
    ]

    try:
        completion = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=messages
        )
        assistant_msg = completion.choices[0].message.content
        return jsonify({"message": assistant_msg})
    except Exception as e:
        return jsonify({"error": str(e)}), 500


# --- Resume PDF Analysis Endpoint ---
import tempfile
import re

def extract_text_from_pdf(pdf_path):
    with fitz.open(pdf_path) as doc:
        return "\n".join([page.get_text() for page in doc])

@app.route("/api/analyze", methods=["POST"])
def analyze_resume():
    if 'resume' not in request.files:
        print("No file part in request.")
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files['resume']
    if not file:
        print("No file selected.")
        return jsonify({"error": "No file received"}), 400

    if not file.filename.endswith('.pdf'):
        print(f"Invalid file type: {file.filename}")
        return jsonify({"error": "Invalid file type"}), 400

    print(f"Received file: {file.filename}")

    with tempfile.NamedTemporaryFile(delete=False, suffix=".pdf") as tmp:
        file.save(tmp.name)
        print(f"Saved file to temp path: {tmp.name}")
        new_resume_text = extract_text_from_pdf(tmp.name)
        os.unlink(tmp.name)

    print("Extracted resume text. Sending to OpenAI...")

    # Only clear context if new file content is different from current stored content
    if student_context.get("raw_resume") != new_resume_text:
        student_context.clear()
        student_context["raw_resume"] = new_resume_text

    try:
        resume_text = new_resume_text
        student_context["raw_resume_text"] = resume_text
        completion = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {"role": "system", "content": SYSTEM_PROMPT},
                {"role": "user", "content": resume_text}
            ]
        )
        response = completion.choices[0].message.content

        # Extract both descriptions and ratings for each section more robustly
        sections = ["Passion Projects", "Internships", "Research Projects", "Essays", "SAT/ACT Scores", "Competitions"]
        for i, section in enumerate(sections):
            section_key = section.lower().replace(" ", "_")
            # Lookahead for the next section or SCORES block to isolate content
            next_header = sections[i + 1] if i + 1 < len(sections) else "SCORES"
            pattern = rf"\*\*{section}\*\*\s*(.*?)(?=\*\*{next_header}\*\*|\bSCORES\b)"
            match = re.search(pattern, response, re.DOTALL | re.IGNORECASE)
            if match:
                content = match.group(1).strip()
                student_context[section_key] = content
                # Try extracting rating from within the section
                rating_match = re.search(r"\*\*Rating\*\*:?\s*([★☆]+)", content)
                if rating_match:
                    student_context[section_key + "_rating"] = rating_match.group(1).strip()

        # Extract SAT/ACT Score separately if needed
        sat_match = re.search(r"SAT Score.*?(\d{3,4})", response)
        if sat_match:
            student_context["test_scores"] = f"SAT: {sat_match.group(1)}"

        # Attempt to capture intended major if present
        major_match = re.search(r"(?i)(intended major|field of study):?\s*(.+)", response)
        if major_match:
            student_context["intended_major"] = major_match.group(2).strip()

        print("Stored student context:")
        for key, value in student_context.items():
            print(f"{key}: {value}")

        # Prepare structured ratings for radar chart
        scores = {
            "passion_projects_rating": len(student_context.get("passion_projects_rating", "")),
            "internships_rating": len(student_context.get("internships_rating", "")),
            "research_projects_rating": len(student_context.get("research_projects_rating", "")),
            "essays_rating": len(student_context.get("essays_rating", "")),
            "sat_act_scores_rating": len(student_context.get("sat_act_scores_rating", "")),
            "competitions_rating": len(student_context.get("competitions_rating", ""))
        }

        # Convert star ratings to numeric values if available
        for key in scores:
            rating_key = key.replace("_rating", "") + "_rating"
            stars = student_context.get(rating_key, "")
            numeric = stars.count("★")
            scores[key] = numeric

        # Compute average score
        average_score = round(sum(scores.values()) / len(scores)) if scores else 0

        print("Analysis complete. Returning response.")
        return jsonify({"message": response, "scores": scores, "average": average_score})
    except Exception as e:
        print(f"OpenAI error: {e}")
        return jsonify({"error": str(e)}), 500


# --- Root route for health check ---
@app.route("/", methods=["GET"])
def home():
    return "Athena API is running!", 200

@app.route("/api/report", methods=["GET"])
def generate_report():
    from fpdf import FPDF

    pdf = FPDF()
    pdf.add_page()
    pdf.set_font("Arial", "B", 16)
    pdf.cell(0, 10, "Athena Resume Evaluation Report", ln=True, align='C')
    pdf.ln(10)

    pdf.set_font("Arial", "", 12)
    numeric_scores = [v for k, v in student_context.items() if k.endswith("_rating") and isinstance(v, int)]
    avg_score = round(sum(numeric_scores) / len(numeric_scores), 1) if numeric_scores else 0.0
    pdf.cell(0, 10, f"Average Score: {avg_score}/5", ln=True)
    pdf.ln(5)

    # Output each section's rating and brief summary
    sections = ["passion_projects", "internships", "research_projects", "essays", "sat_act_scores", "competitions"]
    for section in sections:
        pdf.set_font("Arial", "B", 12)
        pdf.cell(0, 10, section.replace("_", " ").title(), ln=True)
        pdf.set_font("Arial", "", 11)
        content = student_context.get(section, "No data available")
        rating = student_context.get(f"{section}_rating", "No rating")
        pdf.multi_cell(0, 8, f"Rating: {rating}\nSummary: {content}")
        pdf.ln(3)

    # Save to temporary file and return
    report_path = os.path.join(tempfile.gettempdir(), "athena_score_report.pdf")
    pdf.output(report_path)

    from flask import send_file
    return send_file(report_path, as_attachment=True, download_name="Athena_Score_Report.pdf")

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5050)
