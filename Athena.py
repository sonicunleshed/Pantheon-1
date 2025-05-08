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
    user_msg = request.json.get("message", "")

    messages = [
        {"role": "system", "content": SYSTEM_PROMPT},
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
        resume_text = extract_text_from_pdf(tmp.name)
        os.unlink(tmp.name)

    print("Extracted resume text. Sending to OpenAI...")

    try:
        completion = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {"role": "system", "content": SYSTEM_PROMPT},
                {"role": "user", "content": resume_text}
            ]
        )
        response = completion.choices[0].message.content
        print("Analysis complete. Returning response.")
        return jsonify({"message": response})
    except Exception as e:
        print(f"OpenAI error: {e}")
        return jsonify({"error": str(e)}), 500


# --- Root route for health check ---
@app.route("/", methods=["GET"])
def home():
    return "Athena API is running!", 200

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5050)
