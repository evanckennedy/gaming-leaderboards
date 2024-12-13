import axios from "axios";
import { User } from "@/types/types";
import apiClient from "./apiClient";

interface SignUpData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface SignInData {
  email: string;
  password: string;
}

interface ResetMyPasswordData {
  email: string;
  newPassword: string;
}

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:8234";

export const signUpUser = async (userData: SignUpData) => {
  return axios.post(`${apiBaseUrl}/api/users/signup`, userData);
};

export const signInUser = async (userData: SignInData) => {
  return axios.post(`${apiBaseUrl}/api/users/signin`, userData);
};

// This could be used in the future if you make it more secure
// The API is commented out in backend
export const resetMyPassword = async (userData: ResetMyPasswordData) => {
  await axios.patch(`${apiBaseUrl}/api/users/password`, userData);
};

export async function fetchUsers() {
  const response = await apiClient.get<User[]>(`/api/users`);
  return response.data;
}

export const deleteUser = async (userId: number) => {
  return apiClient.delete(`/api/users/${userId}`);
};

export const resetPassword = async (userId: number, newPassword: string) => {
  await apiClient.patch(`/api/users/${userId}/password`, {
    newPassword,
  });
};

export const editRole = async (userId: number, newRoleId: number) => {
  await apiClient.patch(`/api/users/${userId}/role`, {
    newRoleId,
  });
};
