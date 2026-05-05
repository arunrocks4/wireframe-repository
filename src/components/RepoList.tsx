import { useState } from "react";
import type { Repo } from "../types";

type Props = {
  repos: Repo[];
  selected: Repo | null;
  onSelect: (repo: Repo) => void;
};

export default function RepoList({ repos, selected, onSelect }: Props) {
  const [search, setSearch] = useState("");

  const filtered = repos.filter(r =>
    r.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Repositories</h2>

      <input
        placeholder="Search repositories..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: 8,
          marginBottom: 10,
          borderRadius: 6
        }}
      />

      {filtered.map(repo => (
        <div
          key={repo.id}
          onClick={() => onSelect(repo)}
          style={{
            padding: 16,
            marginBottom: 12,
            borderRadius: 10,
            cursor: "pointer",
            border: selected?.id === repo.id
              ? "2px solid #9333ea"
              : "1px solid #1f2937",
            background: "#0f172a"
          }}
        >
          <strong>{repo.name}</strong>
          <p>{repo.description}</p>
          <div>{repo.language} • ⭐ {repo.stars}</div>
        </div>
      ))}
    </div>
  );
}