import { useState } from "react";
import Portal from "./screens/Portal";
import Wireframes from "./screens/Wireframes";

export default function App() {
  const [tab, setTab] = useState<"portal" | "wireframes">("portal");

  return (
    <div style={{ height: "100vh", background: "#0b0f1a", color: "#fff" }}>

      {/* TOP NAV */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "12px 20px",
          borderBottom: "1px solid #1f2937",
          alignItems: "center",
        }}
      >
        <div style={{ fontWeight: 600 }}>DevPortal • AI-Native</div>

        <div>
          <button
            onClick={() => setTab("portal")}
            style={{
              marginRight: 10,
              padding: "6px 12px",
              borderRadius: 6,
              background: tab === "portal" ? "#9333ea" : "transparent",
              color: "white",
              border: "1px solid #374151",
              cursor: "pointer",
            }}
          >
            Portal
          </button>

          <button
            onClick={() => setTab("wireframes")}
            style={{
              padding: "6px 12px",
              borderRadius: 6,
              background: tab === "wireframes" ? "#9333ea" : "transparent",
              color: "white",
              border: "1px solid #374151",
              cursor: "pointer",
            }}
          >
            Wireframes
          </button>
        </div>
      </div>

      {/* CONTENT */}
      {tab === "portal" ? <Portal /> : <Wireframes />}
    </div>
  );
}