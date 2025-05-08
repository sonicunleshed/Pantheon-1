'use client';

import React, { useState } from 'react';

export default function AthenaPage() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi! I'm Athena, your AI admissions coach. How can I help?" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);

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
      <div className="space-y-4 mb-6">
        {messages.map((msg, i) => (
          <div key={i} className={msg.role === 'user' ? 'text-right' : 'text-left'}>
            <div className="p-2 rounded bg-gray-100 dark:bg-gray-800">
              <p style={{ whiteSpace: 'pre-wrap' }}>{msg.content}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-2 mb-4">
        <input
          type="file"
          accept=".pdf"
          onChange={e => setFile(e.target.files?.[0] || null)}
          className="flex-1 border px-3 py-2 rounded"
        />
        <button
          className="bg-green-600 text-white px-4 py-2 rounded"
          onClick={handleUpload}
          disabled={loading || !file}
        >
          Upload Resume
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
    </main>
  );
}
