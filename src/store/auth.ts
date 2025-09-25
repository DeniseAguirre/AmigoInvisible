import { create } from "zustand";
import { AuthCredentials, ApiError, User } from "@/types/auth";
import { authService } from "@/services/auth";

interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: ApiError | null;
  signIn: (credentials: AuthCredentials) => Promise<ApiError | null>;
  signUp: (credentials: AuthCredentials) => Promise<ApiError | null>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<ApiError | null>;
}

/**
 * Store de autenticación usando Zustand
 */
export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: false,
  error: null,

  signIn: async (credentials) => {
    set({ isLoading: true, error: null });
    try {
      const { data: user, error } = await authService.signIn(credentials);
      set({ user, error, isLoading: false });
      return error;
    } catch (e) {
      const error = {
        code: "unexpected_error",
        message: "Ha ocurrido un error inesperado",
      };
      set({ error, isLoading: false });
      return error;
    }
  },

  signUp: async (credentials) => {
    set({ isLoading: true, error: null });
    try {
      const { data: user, error } = await authService.signUp(credentials);
      set({ user, error, isLoading: false });
      return error;
    } catch (e) {
      const error = {
        code: "unexpected_error",
        message: "Ha ocurrido un error inesperado",
      };
      set({ error, isLoading: false });
      return error;
    }
  },

  signOut: async () => {
    set({ isLoading: true, error: null });
    try {
      await authService.signOut();
      set({ user: null, error: null });
    } catch (e) {
      set({
        error: {
          code: "unexpected_error",
          message: "Ha ocurrido un error inesperado",
        },
      });
    } finally {
      set({ isLoading: false });
    }
  },

  resetPassword: async (email) => {
    set({ isLoading: true, error: null });
    try {
      const { error } = await authService.resetPassword(email);
      set({ error, isLoading: false });
      return error;
    } catch (e) {
      const error = {
        code: "unexpected_error",
        message: "Ha ocurrido un error inesperado",
      };
      set({ error, isLoading: false });
      return error;
    }
  },
}));

/**
 * Hook para acceder al store de autenticación
 */
export const useAuth = () => useAuthStore();

/**
 * Hook para acceder solo al usuario actual
 */
export const useAuthUser = () => useAuthStore((state) => state.user);
