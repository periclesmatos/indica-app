import { create } from 'zustand';
import type { User } from '../interface/User';

interface AuthState {
  user: User | null;
  token: string | null;
  isLoggedIn: boolean;
  setAuth: (user: User, token: string) => void;
  logoutUser: () => void;
}

export const useAuthStore = create<AuthState>()((set) => ({
    user: null,
    token: null,
    isLoggedIn: false,

    setToken: (token: string) => set({ token }),

    setAuth: (user, token) => {
      localStorage.setItem('auth-token', token)
      set({ user, token, isLoggedIn: true })
    },

    logoutUser: () => {
      set({ user: null, token: null, isLoggedIn: false });
      localStorage.removeItem("auth-token");
    },
  }),
);