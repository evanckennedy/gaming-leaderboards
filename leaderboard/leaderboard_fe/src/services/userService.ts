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

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:8234";

export const signUpUser = async (userData: SignUpData) => {
  return axios.post(`${apiBaseUrl}/api/users/signup`, userData);
};

export const signInUser = async (userData: SignInData) => {
  return axios.post(`${apiBaseUrl}/api/users/signin`, userData);
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
