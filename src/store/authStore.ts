import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User } from '../interface/User';

interface AuthState {
  user: User | null;
  token: string | null;
  isLoggedIn: boolean;
  setAuth: (user: User, token: string) => void;
  setToken: (token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isLoggedIn: false,

      setAuth: (user, token) => {
        localStorage.setItem('auth-token', token);
        set({ user, token, isLoggedIn: true });
      },

      setToken: (token) => {
        localStorage.setItem('auth-token', token);
        set({ token, isLoggedIn: !!token });
      },

      logout: () => {
        localStorage.removeItem('auth-token');
        set({ user: null, token: null, isLoggedIn: false });
      },
    }),
    {
      name: 'auth-storage', // chave usada no localStorage
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        isLoggedIn: state.isLoggedIn,
      }),
    }
  )
);