import * as Yup from "yup";

export const RegisterSchema = Yup.object().shape({
  fullName: Yup.string()
    .required("El nombre completo es requerido")
    .min(3, "El nombre debe tener al menos 3 caracteres"),

  email: Yup.string()
    .email("Correo electrónico inválido")
    .required("El correo electrónico es requerido"),

  password: Yup.string()
    .required("La contraseña es requerida")
    .min(6, "La contraseña debe tener al menos 6 caracteres"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Las contraseñas no coinciden")
    .required("La confirmación de contraseña es requerida"),

  acceptTerms: Yup.boolean()
    .oneOf([true], "Debes aceptar los términos y condiciones")
    .required("Debes aceptar los términos y condiciones"),
});
