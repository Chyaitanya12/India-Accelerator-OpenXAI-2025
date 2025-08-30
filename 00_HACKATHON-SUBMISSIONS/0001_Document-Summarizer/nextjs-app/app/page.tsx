"use client";

import { useState } from "react";

export default function HomePage() {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [charCount, setCharCount] = useState(0);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setText(newText);
    setCharCount(newText.length);
  };

  const handleSummarize = async () => {
    if (!text.trim()) {
      setError("Please enter some text to summarize");
      return;
    }

    setLoading(true);
    setError("");
    setSummary("");

    try {
      const response = await fetch("/api/summarize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });

      const data = await response.json();

      if (response.ok) {
        setSummary(data.summary);
      } else {
        setError(data.error || "Failed to summarize text");
      }
    } catch (err) {
      setError("An error occurred while summarizing the text. Please ensure Ollama is running.");
      console.error("Summarization error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setText("");
    setSummary("");
    setError("");
    setCharCount(0);
  };

  const handleCopySummary = () => {
    navigator.clipboard.writeText(summary);
  };

  return (
    <>
      <header className="header">
        <h1 className="title">📄 Document Summarizer</h1>
        <p className="description">
          AI-powered document summarization using Ollama. Paste your text and get instant, intelligent summaries. No minimum character limit.
        </p>
      </header>

      <main className="container">
        <section className="input-section">
          <div className="input-header">
            <h3>Document Text</h3>
            <span className="char-count">{charCount} characters</span>
          </div>
          
          <textarea
            className="textarea"
            placeholder="Paste your document text here..."
            value={text}
            onChange={handleTextChange}
            rows={12}
            disabled={loading}
          />

          <div className="button-group">
            <button
              className="button primary"
              onClick={handleSummarize}
              disabled={loading || text.length === 0}
            >
              {loading ? (
                <>
                  <span className="spinner"></span>
                  Summarizing...
                </>
              ) : (
                "🚀 Summarize Document"
              )}
            </button>
            
            <button
              className="button secondary"
              onClick={handleClear}
              disabled={loading}
            >
              🗑️ Clear
            </button>
          </div>
        </section>

        {error && (
          <div className="error">
            <strong>Error:</strong> {error}
          </div>
        )}

        {loading && (
          <div className="loading">
            <div className="loading-spinner"></div>
            <p>AI is processing your document... This may take 30-60 seconds.</p>
          </div>
        )}

        {summary && (
          <section className="summary-section">
            <div className="summary-header">
              <h3>📋 AI Summary</h3>
              <button
                className="button copy-button"
                onClick={handleCopySummary}
                title="Copy summary to clipboard"
              >
                📋 Copy
              </button>
            </div>
            <div className="summary-content">
              <p>{summary}</p>
            </div>
            <div className="summary-stats">
              <small>
                Original: {text.length} characters → Summary: {summary.length} characters
                ({Math.round((summary.length / text.length) * 100)}% reduction)
              </small>
            </div>
          </section>
        )}
      </main>

      <footer className="footer">
        <p>© 2024 Document Summarizer. All rights reserved.</p>
      </footer>
    </>
  );
}
