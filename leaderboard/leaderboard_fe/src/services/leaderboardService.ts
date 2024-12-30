import { Leaderboard } from "@/types/types";
import axios from "axios";
import apiClient from "./apiClient";

interface CreateLeaderboardData {
  gameName: string;
  genreName: string;
  players: {
    score: number;
    place: number;
    name: string;
  }[];
}

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:8234";

export async function fetchLeaderboards() {
  const response = await axios.get<Leaderboard[]>(
    `${apiBaseUrl}/api/leaderboards`,
  );
  return response.data;
}

export async function createLeaderboard(
  submissionValues: CreateLeaderboardData,
) {
  const response = await apiClient.post(`/api/leaderboards`, submissionValues);
  return response.data;
}

export async function deleteLeaderboard(sessionId: number) {
  return apiClient.delete(`/api/leaderboards/${sessionId}`);
}
