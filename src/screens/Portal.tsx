import { useState } from "react";
import RepoList from "../components/RepoList";
import RepoOverview from "../components/RepoOverview";
import AgentPanel from "../components/AgentPanel";
import { repos } from "../mockData";
import type { Repo, AgentStatus } from "../types";

export default function Portal() {
  const [selected, setSelected] = useState<Repo | null>(repos[0]);
  const [status, setStatus] = useState<AgentStatus>("success");
  const [logs, setLogs] = useState<string[]>([
    "Cloning repo...",
    "Analyzing...",
    "Running tests...",
    "Creating PR...",
    "Done ✅",
  ]);

  const runAgent = () => {
    setStatus("running");
    setLogs([]);

    const steps = [
      "Cloning repo...",
      "Analyzing...",
      "Running tests...",
      "Creating PR...",
    ];

    steps.forEach((step, i) => {
      setTimeout(() => {
        setLogs((prev) => [...prev, step]);
      }, i * 1000);
    });

    setTimeout(() => {
      setStatus("success");
      setLogs((prev) => [...prev, "Done ✅"]);
    }, steps.length * 1000 + 1000);
  };

  return (
    <div style={{ display: "flex", height: "calc(100vh - 60px)" }}>

      {/* LEFT */}
      <div style={{ width: 300, padding: 20 }}>
        <RepoList
          repos={repos}
          selected={selected}
          onSelect={setSelected}
        />
      </div>

      {/* CENTER */}
      <div style={{ flex: 1, padding: 30 }}>
        <RepoOverview repo={selected} onRun={runAgent} />
        <AgentPanel status={status} logs={logs} />
      </div>

      {/* RIGHT */}
      <div
        style={{
          width: 300,
          borderLeft: "1px solid #1f2937",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <h3>Select a Repository</h3>
          <p>Trigger AI workflows</p>
        </div>
      </div>
    </div>
  );
}