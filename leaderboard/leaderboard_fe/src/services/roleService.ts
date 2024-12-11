import { Role } from "@/types/types";
import apiClient from "./apiClient";

export const fetchRoles = async () => {
  const response = await apiClient.get<Role[]>(`/api/roles`);
  return response.data;
};
