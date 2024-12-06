import axios from "axios";
import { User } from "@/types/types";

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
  const response = await axios.get<User[]>(`${apiBaseUrl}/api/users`);
  return response.data;
}

export const deleteUser = async (userId: number) => {
  return axios.delete(`${apiBaseUrl}/api/users/${userId}`);
};
