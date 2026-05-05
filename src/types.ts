export type Repo = {
  id: number;
  name: string;
  description: string;
  stars: number;
  language: string;
  status: "ACTIVE" | "FAILED";
};

export type AgentStatus = "idle" | "pending" | "running" | "success" | "failed";