import { useState } from "react";

export default function Wireframes() {
  const [active, setActive] = useState("Repository List");

  const tabs = [
    "Repository List",
    "Repository Overview",
    "Task Selection",
    "Agent Execution",
  ];

  const cardStyle = {
    marginTop: 15,
    background: "#1f2937",
    color: "#e5e7eb",
    padding: 20,
    borderRadius: 8,
    border: "1px solid #374151",
  };

  return (
    <div style={{ padding: 30 }}>

      {/* HEADER */}
      <h2>UX Design · Wireframes</h2>

      <p style={{ marginTop: 10, maxWidth: 900 }}>
        Mid-fidelity wireframes for the Agentic Developer Portal. This design
        demonstrates a full developer workflow: discover repositories, trigger
        AI tasks, and monitor execution in real time.
      </p>

      {/* TABS */}
      <div style={{ marginTop: 20 }}>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            style={{
              marginRight: 10,
              padding: "6px 12px",
              borderRadius: 6,
              border: "1px solid #374151",
              background: active === tab ? "#9333ea" : "transparent",
              color: "white",
              cursor: "pointer",
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* CONTENT */}
      <div
        style={{
          marginTop: 30,
          border: "1px solid #1f2937",
          borderRadius: 10,
          padding: 20,
          background: "#111827",
        }}
      >

        {/* REPOSITORY LIST */}
        {active === "Repository List" && (
          <>
            <h3>Repository Discovery</h3>
            <p>Search, filter, and browse repositories.</p>

            <div style={cardStyle}>
              <p>🔍 Search bar + filters</p>
              <p>📊 Repo cards with metadata</p>
              <p>📈 Coverage & quality indicators</p>
            </div>
          </>
        )}

        {/* REPOSITORY OVERVIEW */}
        {active === "Repository Overview" && (
          <>
            <h3>Repository Insights</h3>
            <p>View repository details and available actions.</p>

            <div style={cardStyle}>
              <p>📌 Repo details (stars, language)</p>
              <p>⚙️ AI action buttons (PR, Refactor, Tests)</p>
            </div>
          </>
        )}

        {/* TASK SELECTION */}
        {active === "Task Selection" && (
          <>
            <h3>Task Selection</h3>
            <p>Choose AI-powered actions.</p>

            <div style={cardStyle}>
              <p>🤖 AI PR generation</p>
              <p>🔧 Automated refactoring</p>
              <p>🧪 Test execution</p>
              <p>🔒 Security scan</p>
            </div>
          </>
        )}

        {/* AGENT EXECUTION */}
        {active === "Agent Execution" && (
          <>
            <h3>Execution Monitoring</h3>
            <p>Track progress with real-time logs.</p>

            <div
              style={{
                marginTop: 15,
                background: "#020617",
                color: "#22c55e",
                padding: 20,
                borderRadius: 8,
                border: "1px solid #374151",
                fontFamily: "monospace",
              }}
            >
              <p>Cloning repo...</p>
              <p>Analyzing...</p>
              <p>Running tests...</p>
              <p>Done ✅</p>
            </div>
          </>
        )}
      </div>

      {/* UX WRITEUP */}
      <div style={{ marginTop: 40 }}>
        <h3>UX Design Rationale</h3>

        <p style={{ marginTop: 10 }}>
          The design minimizes context switching by combining repository
          discovery, AI task execution, and monitoring into one interface.
        </p>

        <ul style={{ marginTop: 10 }}>
          <li>Unified 3-panel workflow</li>
          <li>Progressive disclosure</li>
          <li>Real-time feedback via logs</li>
          <li>Familiar terminal-style interaction</li>
        </ul>
      </div>

    </div>
  );
}