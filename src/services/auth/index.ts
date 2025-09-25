/**
 * Servicio de autenticación que implementa operaciones con Supabase
 */
import { AuthCredentials, AuthResponse, User } from "@/types/auth";
import { supabase } from "../supabase";

class AuthService {
  /**
   * Registra un nuevo usuario
   */
  async signUp(credentials: AuthCredentials): Promise<AuthResponse<User>> {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: credentials.email,
        password: credentials.password,
      });

      if (error) {
        return {
          data: null,
          error: {
            code: error.name,
            message: error.message,
          },
        };
      }

      return {
        data: data.user as User,
        error: null,
      };
    } catch (error) {
      return {
        data: null,
        error: {
          code: "unexpected_error",
          message: "Error inesperado al registrar usuario",
        },
      };
    }
  }

  /**
   * Inicia sesión con email y contraseña
   */
  async signIn(credentials: AuthCredentials): Promise<AuthResponse<User>> {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: credentials.email,
        password: credentials.password,
      });

      if (error) {
        return {
          data: null,
          error: {
            code: error.name,
            message: error.message,
          },
        };
      }

      return {
        data: data.user as User,
        error: null,
      };
    } catch (error) {
      return {
        data: null,
        error: {
          code: "unexpected_error",
          message: "Error inesperado al iniciar sesión",
        },
      };
    }
  }

  /**
   * Cierra la sesión del usuario actual
   */
  async signOut(): Promise<AuthResponse> {
    try {
      const { error } = await supabase.auth.signOut();

      if (error) {
        return {
          data: null,
          error: {
            code: error.name,
            message: error.message,
          },
        };
      }

      return { data: null, error: null };
    } catch (error) {
      return {
        data: null,
        error: {
          code: "unexpected_error",
          message: "Error inesperado al cerrar sesión",
        },
      };
    }
  }

  /**
   * Obtiene el usuario actual
   */
  async getCurrentUser(): Promise<AuthResponse<User>> {
    try {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();

      if (error) {
        return {
          data: null,
          error: {
            code: error.name,
            message: error.message,
          },
        };
      }

      return {
        data: (session?.user as User) || null,
        error: null,
      };
    } catch (error) {
      return {
        data: null,
        error: {
          code: "unexpected_error",
          message: "Error al obtener la sesión actual",
        },
      };
    }
  }

  /**
   * Envía email para restablecer contraseña
   */
  async resetPassword(email: string): Promise<AuthResponse> {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: "io.supabase.amigoinvisible://reset-password",
      });

      if (error) {
        return {
          data: null,
          error: {
            code: error.name,
            message: error.message,
          },
        };
      }

      return { data: null, error: null };
    } catch (error) {
      return {
        data: null,
        error: {
          code: "unexpected_error",
          message: "Error al enviar el email de recuperación",
        },
      };
    }
  }

  /**
   * Suscribe a cambios en el estado de autenticación
   */
  onAuthStateChange(callback: (user: User | null) => void) {
    return supabase.auth.onAuthStateChange((_event, session) => {
      callback((session?.user as User) || null);
    });
  }
}

export const authService = new AuthService();
