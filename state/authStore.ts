import { AuthError, AuthResponse, UserResponse } from '@supabase/supabase-js';
import { create } from 'zustand';
import { supabase } from '~/lib/supabase';

type AuthState = {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  getUser: () => Promise<UserResponse>;
  logIn: (email: string, password: string) => Promise<AuthError | null>;
  signUp: (email: string, password: string) => Promise<AuthResponse>;
  signOut: (() => Promise<AuthError | null>) | null;
};

export const useAuthStore = create<AuthState>((set, get) => ({
  isLoggedIn: false,
  setIsLoggedIn: (isLoggedIn: boolean) => {
    set({ isLoggedIn });
  },
  getUser: async () => {
    const u = await supabase.auth.getUser();
    return u;
  },
  logIn: async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) return error;
    set({
      isLoggedIn: true,
      signOut: async () => {
        const { error } = await supabase.auth.signOut();
        if (error) return error;
        set({
          signOut: async () => null,
        });
        return null;
      },
    });
    return null;
  },
  signUp: async (email: string, password: string) => {
    const auth = await supabase.auth.signUp({
      email,
      password,
    });
    if (auth.error) return auth;
    set({
      isLoggedIn: true,
      signOut: async () => {
        const { error } = await supabase.auth.signOut();
        if (error) return error;
        set({
          signOut: async () => null,
        });
        return null;
      },
    });
    return auth;
  },
  signOut: null,
}));
