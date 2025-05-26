import { create } from "zustand";

interface User {
  userId: string;
  optimusMemberNumber: string;
  displayName: string;
  loginType: string;
}

interface AuthState {
  user: User | null;
  setUser: (user: User) => void;
}

export const useUserStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
