import axios from "axios";

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
