import React from "react";
import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Formik } from "formik";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Checkbox } from "@/components/ui/Checkbox";
import { Container } from "@/components/ui/Container";
import { Title } from "@/components/ui/Title";
import { RootStackParamList } from "@/types/navigation";
import { RegisterSchema } from "./registerValidation";
import { authService } from "@/services/auth";

type RegisterScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Register"
>;

interface RegisterFormValues {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
}

export const RegisterScreen = () => {
  const navigation = useNavigation<RegisterScreenNavigationProp>();

  const initialValues: RegisterFormValues = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  };

  const handleRegister = async (values: RegisterFormValues) => {
    const { error } = await authService.signUp({
      email: values.email,
      password: values.password,
    });

    if (error) {
      console.error("Error en el registro:", error.message);
      return;
    }

    navigation.navigate("Home");
  };

  return (
    <Container>
      <View className="flex-1 items-center px-5">
        <Title title="Crear Nueva Cuenta" />

        <Formik
          initialValues={initialValues}
          validationSchema={RegisterSchema}
          onSubmit={handleRegister}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit: formikSubmit,
            values,
            errors,
            touched,
            setFieldValue,
            isSubmitting,
          }) => (
            <View className="w-full">
              <View className="gap-2">
                <Image
                  source={require("../../../assets/register.png")}
                  className="w-full h-[250px]"
                  resizeMode="contain"
                />
                <Input
                  placeholder="Nombre completo"
                  value={values.fullName}
                  onChangeText={handleChange("fullName")}
                  onBlur={handleBlur("fullName")}
                  error={touched.fullName ? errors.fullName : undefined}
                />
                <Input
                  placeholder="Correo electrónico"
                  value={values.email}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  error={touched.email ? errors.email : undefined}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoComplete="email"
                />
                <Input
                  placeholder="Contraseña"
                  value={values.password}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  error={touched.password ? errors.password : undefined}
                  secureTextEntry
                />
                <Input
                  placeholder="Confirmar contraseña"
                  value={values.confirmPassword}
                  onChangeText={handleChange("confirmPassword")}
                  onBlur={handleBlur("confirmPassword")}
                  error={
                    touched.confirmPassword ? errors.confirmPassword : undefined
                  }
                  secureTextEntry
                />

                <View className="my-4">
                  <Checkbox
                    value={values.acceptTerms}
                    onValueChange={(value: boolean) =>
                      setFieldValue("acceptTerms", value)
                    }
                    error={touched.acceptTerms ? errors.acceptTerms : undefined}
                    label="Acepto los términos y condiciones"
                  />
                </View>
              </View>
              <Button
                title="Registrarse"
                onPress={formikSubmit}
                variant="primary"
              />

              <View className="items-center mt-4">
                <Text className="text-sm text-neutral-600">
                  Ya tengo cuenta.{" "}
                  <Text
                    className="text-secondary-500 font-semibold"
                    onPress={() => navigation.navigate("Login")}
                  >
                    Iniciar sesión
                  </Text>
                </Text>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </Container>
  );
};
