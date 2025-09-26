import * as Yup from "yup";

export interface ForgotPasswordFormValues {
  email: string;
}

export const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email("Introduce un correo electrónico válido")
    .required("El correo electrónico es requerido"),
});
