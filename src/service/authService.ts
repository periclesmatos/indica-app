import axios from "axios";
import { useAuthStore } from "../store/authStore";
import type { User } from "../interface/User";
import type { RegisterRequest } from "../interface/RegisterRequest";
import type { AuthResponse } from "../interface/AuthResponse";
import type { LoginRequest } from "../interface/LoginRequest";

const API_URL = "http://localhost:8080";

const api = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      const logout = useAuthStore.getState().logoutUser;
      logout();
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export async function register(request: RegisterRequest, referralCode?: string): Promise<User> {
  const response = await api.post<User>("/auth/register", request, {
    params: referralCode ? { referralCode } : undefined,
  });
  return response.data;
}

export async function login(request: LoginRequest): Promise<AuthResponse> {
  const response = await api.post<AuthResponse>("/auth/login", request);
  const { user, token } = response.data;
  const setAuth = useAuthStore.getState().setAuth;
  setAuth(user, token.tokenValue);
  return response.data;
}

export async function getMe(): Promise<User> {
  const response = await api.get<User>("/auth/currentUser");
  const user = response.data;
  const setAuth = useAuthStore.getState().setAuth;
  const token = useAuthStore.getState().token;
  if (token) {
    setAuth(user, token);
  }
  return user;
}
