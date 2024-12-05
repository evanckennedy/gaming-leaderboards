import { Leaderboard } from "@/types/types";
import axios from "axios";

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:8234";

export async function fetchLeaderboards() {
  const response = await axios.get<Leaderboard[]>(
    `${apiBaseUrl}/api/leaderboards`,
  );
  return response.data;
}
