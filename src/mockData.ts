import type { Repo } from "./types";

export const repos: Repo[] = [
  {
    id: 1,
    name: "checkout-gateway",
    description: "Payment orchestration system",
    stars: 512,
    language: "Go",
    status: "ACTIVE",
  },
  {
    id: 2,
    name: "identity-auth-svc",
    description: "Auth + OAuth service",
    stars: 431,
    language: "Rust",
    status: "FAILED",
  },
  {
    id: 3,
    name: "search-ranking-ml",
    description: "ML ranking engine",
    stars: 389,
    language: "Python",
    status: "ACTIVE",
  },
];