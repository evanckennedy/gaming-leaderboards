import axios from "axios";
import { Role } from "@/types/types";

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:8234";

export const fetchRoles = async () => {
  const response = await axios.get<Role[]>(`${apiBaseUrl}/api/roles`);
  return response.data;
};
