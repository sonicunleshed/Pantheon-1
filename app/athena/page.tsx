'use client';

import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import {
  Radar
} from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export default function AthenaPage() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi! I'm Athena, your AI admissions coach. How can I help?" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [scores, setScores] = useState({
    passion_projects_rating: 0,
    internships_rating: 0,
    research_projects_rating: 0,
    essays_rating: 0,
    sat_act_scores_rating: 0,
    competitions_rating: 0
  });
  const [average, setAverage] = useState<number | null>(null);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('http://127.0.0.1:5050/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          session_id: 'pantheon-athena',
          message: input,
          user_info: {
            likely_major: 'Undeclared',
            academic_scores: 'GPA: 3.7',
            extracurriculars: 'None listed',
            test_scores: 'SAT 1400',
            achievements: 'None listed',
            areas_for_improvement: 'N/A'
          }
        })
      });

      const data = await res.json();
      if (data.message) {
        setMessages(prev => [...prev, { role: 'assistant', content: data.message }]);
      } else if (data.error) {
        setMessages(prev => [
          ...prev,
          { role: 'assistant', content: "Athena encountered an error: " + data.error }
        ]);
      } else {
        setMessages(prev => [
          ...prev,
          { role: 'assistant', content: "Athena didn't respond. Please try again." }
        ]);
      }
    } catch (err) {
      console.error('Failed to reach Athena:', err);
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: "Failed to connect to Athena server." }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert("No file selected.");
      return;
    }

    console.log("Uploading file:", file.name, file.type);
    const formData = new FormData();
    formData.append("resume", file);

    setMessages(prev => [...prev, { role: 'user', content: "Uploaded resume for analysis." }]);
    setLoading(true);

    try {
      const res = await fetch('http://127.0.0.1:5050/api/analyze', {
        method: 'POST',
        body: formData
      });

      const data = await res.json();
      console.log("Response from server:", data);

      if (data.message) {
        setMessages(prev => [...prev, { role: 'assistant', content: data.message }]);
        if (data.scores) {
          setScores(data.scores);
        }
        if (data.average) {
          setAverage(data.average);
        }
      } else if (data.error) {
        setMessages(prev => [...prev, { role: 'assistant', content: "Error: " + data.error }]);
      }
    } catch (err) {
      console.error("Upload failed:", err);
      alert("Upload failed: " + err);
      setMessages(prev => [...prev, { role: 'assistant', content: "Failed to upload resume." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Athena – College Admissions AI</h1>
      <div className="flex flex-col h-[70vh] overflow-y-auto space-y-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 p-4 rounded mb-6">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[75%] px-4 py-2 rounded-lg whitespace-pre-wrap text-sm ${
                msg.role === 'user'
                  ? 'bg-green-600 text-white text-right'
                  : 'bg-green-100 dark:bg-green-800 text-black dark:text-white'
              }`}
            >
              <ReactMarkdown>{msg.content}</ReactMarkdown>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-3 mb-4 border border-zinc-300 dark:border-zinc-700 p-3 rounded bg-zinc-50 dark:bg-zinc-800">
        <label className="cursor-pointer text-sm font-medium text-zinc-700 dark:text-zinc-100">
          📎 Choose Resume (PDF)
          <input
            type="file"
            accept=".pdf"
            onChange={e => setFile(e.target.files?.[0] || null)}
            className="hidden"
          />
        </label>
        {file && (
          <span className="text-sm text-zinc-600 dark:text-zinc-300 truncate max-w-xs">
            {file.name}
          </span>
        )}
        <button
          className="ml-auto bg-green-600 text-white px-3 py-1.5 rounded text-sm hover:bg-green-700 disabled:opacity-50"
          onClick={handleUpload}
          disabled={loading || !file}
        >
          Upload
        </button>
      </div>
      <div className="flex gap-2">
        <input
          className="flex-1 border px-3 py-2 rounded"
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && sendMessage()}
          placeholder="Ask Athena a question..."
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={sendMessage}
          disabled={loading}
        >
          Send
        </button>
      </div>
      {loading && <p className="text-sm text-gray-500 mt-2">Athena is thinking…</p>}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Profile Radar Chart</h2>
        <Radar
          data={{
            labels: [
              "Passion Projects",
              "Internships",
              "Research Projects",
              "Essays",
              "SAT/ACT Scores",
              "Competitions"
            ],
            datasets: [
              {
                label: "Your Ratings",
                data: [
                  scores.passion_projects_rating,
                  scores.internships_rating,
                  scores.research_projects_rating,
                  scores.essays_rating,
                  scores.sat_act_scores_rating,
                  scores.competitions_rating
                ],
                backgroundColor: "rgba(34, 197, 94, 0.2)",
                borderColor: "rgba(34, 197, 94, 1)",
                borderWidth: 2
              }
            ]
          }}
          options={{
            scales: {
              r: {
                min: 0,
                max: 5,
                ticks: {
                  stepSize: 1,
                  color: '#4B5563'
                },
                pointLabels: {
                  color: '#4B5563',
                  font: {
                    size: 14
                  }
                },
                grid: {
                  color: '#D1D5DB'
                },
                angleLines: {
                  color: '#D1D5DB'
                }
              }
            },
            plugins: {
              legend: {
                labels: {
                  color: '#4B5563'
                }
              }
            }
          }}
        />
        {average !== null && (
          <p className="text-lg font-medium mt-4">
            Average Score: <span className="text-green-600">{average}/5</span>
          </p>
        )}

        <a
          href="http://127.0.0.1:5050/api/report"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Download Score Report (PDF)
        </a>
      </div>
    </main>
  );
}
