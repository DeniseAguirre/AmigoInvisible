/**
 * Representa un usuario autenticado en la aplicación
 */
export interface User {
  id: string;
  email?: string;
  created_at?: string;
  updated_at?: string;
  user_metadata?: Record<string, unknown>;
}

/**
 * Representa una respuesta de error de la API
 */
export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, unknown>;
}

/**
 * Estado de autenticación del usuario
 */
export interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: ApiError | null;
}

/**
 * Credenciales para autenticación
 */
export interface AuthCredentials {
  email: string;
  password: string;
}

/**
 * Respuesta genérica de las operaciones de autenticación
 */
export interface AuthResponse<T = void> {
  data: T | null;
  error: ApiError | null;
}

/**
 * Opciones para reinicio de contraseña
 */
export interface ResetPasswordOptions {
  redirectTo?: string;
}
