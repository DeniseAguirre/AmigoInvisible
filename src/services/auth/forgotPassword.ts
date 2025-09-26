/**
 * Servicio de recuperación de contraseña
 */

export interface ForgotPasswordRequest {
  email: string;
}

export interface ForgotPasswordResponse {
  success: boolean;
  message: string;
}

export class ForgotPasswordService {
  /**
   * Envía un email de recuperación de contraseña
   * @param request - Datos de la solicitud
   * @returns Promise con la respuesta del servicio
   */
  static async sendResetEmail(
    request: ForgotPasswordRequest
  ): Promise<ForgotPasswordResponse> {
    try {
      // TODO: Implementar llamada real a la API cuando esté disponible
      // const response = await fetch('/api/forgot-password', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(request),
      // });
      // return await response.json();

      // Simulación por ahora
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Validación básica del formato de email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(request.email)) {
        return {
          success: false,
          message: "Formato de correo electrónico inválido",
        };
      }

      return {
        success: true,
        message: "Si el correo existe, recibirás un enlace de recuperación",
      };
    } catch (error) {
      return {
        success: false,
        message: "Error al procesar la solicitud. Intenta nuevamente.",
      };
    }
  }
}
