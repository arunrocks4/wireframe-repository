import { useState } from "react";
import type { Repo } from "../types";

type Props = {
  repos: Repo[];
  selectedId: number | null;
  onSelect: (repo: Repo) => void;
};

export default function RepoSidebar({ repos, selectedId, onSelect }: Props) {
  const [search, setSearch] = useState("");

  const filtered = repos.filter(r =>
    r.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        className="search"
        placeholder="Search repositories..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filtered.map((repo) => (
        <div
          key={repo.id}
          onClick={() => onSelect(repo)}
          className={`repo-card ${selectedId === repo.id ? "active" : ""}`}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <strong>{repo.name}</strong>
            <span className={`badge ${repo.status === "ACTIVE" ? "green" : "red"}`}>
              {repo.status}
            </span>
          </div>

          <p>{repo.description}</p>
          <div>{repo.language} • ⭐ {repo.stars}</div>
        </div>
      ))}
    </div>
  );
}