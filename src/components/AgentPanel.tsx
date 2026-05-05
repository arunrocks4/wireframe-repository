import type { AgentStatus } from "../types";

type Props = {
  status: AgentStatus;
  logs: string[];
};

export default function AgentPanel({ status, logs }: Props) {
  return (
    <div>
      <h2>Agent Execution</h2>
      <p>Status: {status}</p>

      {status === "running" && <div className="spinner" />}

      <div className="terminal">
        {logs.map((log, i) => (
          <div key={i}>{log}</div>
        ))}
      </div>
    </div>
  );
}