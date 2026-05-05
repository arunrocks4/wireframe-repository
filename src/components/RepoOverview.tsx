import type { Repo } from "../types";

type Props = {
  repo: Repo | null;
  onRun: () => void;
};

export default function RepoOverview({ repo, onRun }: Props) {
  if (!repo) {
    return (
      <div style={{ textAlign: "center", marginTop: 100 }}>
        <h2>Select a Repository</h2>
        <p>Launch AI-powered workflows</p>
      </div>
    );
  }

  return (
    <div>
      <h1>{repo.name}</h1>
      <p>{repo.description}</p>

      <div>
        ⭐ {repo.stars} | {repo.language} |{" "}
        <span className="green">{repo.status}</span>
      </div>

      <button onClick={onRun} className="button">
        Run Agent Task
      </button>

      <div className="grid">
        {[
          "AI PRs",
          "Refactor",
          "Tests",
          "Security",
          "Upgrade",
          "Review"
        ].map((item) => (
          <div key={item} className="grid-item">{item}</div>
        ))}
      </div>
    </div>
  );
}