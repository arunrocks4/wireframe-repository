import { useState } from "react";
import { repos } from "../mockData";
import type { Repo } from "../types";

type Props = {
  onSelect: (repo: Repo) => void;
};

export default function RepoDashboard({ onSelect }: Props) {
  const [search, setSearch] = useState("");

  const filtered = repos.filter(r =>
    r.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: 20 }}>

      {/* HEADER */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>DevPortal • AI-Native</h2>
        <div>
          <button style={{ marginRight: 10 }}>Portal</button>
          <button>Wireframes</button>
        </div>
      </div>

      {/* SEARCH + FILTER */}
      <div style={{ marginTop: 20, display: "flex", gap: 10 }}>
        <input
          placeholder="Search repositories, teams, tags..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            flex: 1,
            padding: 10,
            borderRadius: 6,
            border: "1px solid #ccc",
          }}
        />

        <select>
          <option>All Languages</option>
        </select>

        <select>
          <option>All Status</option>
        </select>
      </div>

      {/* SORT */}
      <div style={{ marginTop: 15 }}>
        <span>Sort: </span>
        {["Stars", "Name", "Coverage", "Quality", "Activity"].map((s) => (
          <button key={s} style={{ marginLeft: 8 }}>
            {s}
          </button>
        ))}
      </div>

      {/* LIST */}
      <div style={{ marginTop: 20 }}>
        {filtered.map((repo) => (
          <div
            key={repo.id}
            onClick={() => onSelect(repo)}
            style={{
              padding: 16,
              border: "1px solid #ddd",
              borderRadius: 10,
              marginBottom: 12,
              cursor: "pointer",
              background: "#fff",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <strong>{repo.name}</strong>

              <span style={{ color: "green", fontSize: 12 }}>
                {repo.status}
              </span>
            </div>

            <p style={{ marginTop: 6 }}>{repo.description}</p>

            <div style={{ marginTop: 10, fontSize: 13 }}>
              {repo.language} • ⭐ {repo.stars} • 5 PRs • 18 issues
            </div>

            {/* PROGRESS */}
            <div style={{ marginTop: 10 }}>
              <div>Coverage</div>
              <div
                style={{
                  height: 6,
                  background: "#eee",
                  borderRadius: 4,
                  marginTop: 4,
                }}
              >
                <div
                  style={{
                    width: "82%",
                    background: "orange",
                    height: "100%",
                    borderRadius: 4,
                  }}
                />
              </div>
            </div>

            <div style={{ marginTop: 10 }}>
              <div>Quality</div>
              <div
                style={{
                  height: 6,
                  background: "#eee",
                  borderRadius: 4,
                  marginTop: 4,
                }}
              >
                <div
                  style={{
                    width: "88%",
                    background: "red",
                    height: "100%",
                    borderRadius: 4,
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}