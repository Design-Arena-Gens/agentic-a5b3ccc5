"use client";

import { useCallback } from "react";

function openUrl(url: string) {
  const win = window.open(url, "_blank", "noopener,noreferrer");
  if (win) win.opener = null;
}

export default function HomePage() {
  const openGoogle = useCallback(() => openUrl("https://www.google.com"), []);
  const openChatGPT = useCallback(() => openUrl("https://chat.openai.com"), []);

  return (
    <main
      style={{
        minHeight: "100dvh",
        display: "grid",
        placeItems: "center",
        background: "#0b1020",
        color: "#e7ecff",
        fontFamily: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica Neue, Arial, Apple Color Emoji, Segoe UI Emoji",
      }}
    >
      <div style={{ width: "min(92vw, 760px)", textAlign: "center" }}>
        <h1 style={{ fontSize: 36, margin: 0, letterSpacing: 0.2 }}>Quick Launch</h1>
        <p style={{ marginTop: 8, opacity: 0.8 }}>
          Open Google Search and ChatGPT instantly.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 16,
            marginTop: 28,
          }}
        >
          <button
            onClick={openGoogle}
            style={{
              padding: "16px 20px",
              borderRadius: 12,
              border: "1px solid #2a3558",
              background: "linear-gradient(180deg, #101935, #0e142b)",
              color: "#e7ecff",
              fontSize: 18,
              cursor: "pointer",
              transition: "transform .06s ease, background .2s ease, border-color .2s ease",
            }}
            onMouseDown={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform = "scale(0.985)";
            }}
            onMouseUp={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
            }}
          >
            ?? Open Google
          </button>

          <button
            onClick={openChatGPT}
            style={{
              padding: "16px 20px",
              borderRadius: 12,
              border: "1px solid #2a3558",
              background: "linear-gradient(180deg, #101935, #0e142b)",
              color: "#e7ecff",
              fontSize: 18,
              cursor: "pointer",
              transition: "transform .06s ease, background .2s ease, border-color .2s ease",
            }}
            onMouseDown={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform = "scale(0.985)";
            }}
            onMouseUp={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
            }}
          >
            ?? Open ChatGPT
          </button>
        </div>

        <noscript>
          <p style={{ marginTop: 24 }}>
            JavaScript disabled? Use these links: {" "}
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">Google</a>
            {" | "}
            <a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer">ChatGPT</a>
          </p>
        </noscript>
      </div>
    </main>
  );
}
