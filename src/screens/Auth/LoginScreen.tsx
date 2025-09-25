import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import { Formik } from "formik";
import { loginSchema, LoginFormValues } from "./loginValidation";

import { Button } from "@/components/ui/Button";

import { useNavigation } from "@react-navigation/native";
import { AuthCredentials } from "@/types/auth";
import { useAuth } from "@/store/auth";
import { Container } from "@/components/ui/Container";
import { Input } from "@/components/ui/Input";
import { Title } from "@/components/ui/Title";

import "./../../../global.css";

export const LoginScreen = React.memo(() => {
  const navigation = useNavigation();
  const { signIn } = useAuth();

  const initialValues: LoginFormValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values: LoginFormValues) => {
    const credentials: AuthCredentials = {
      email: values.email,
      password: values.password,
    };

    const error = await signIn(credentials);
    if (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <View className="flex-1 p-5 items-center justify-between">
        <Title title="Iniciar Sesión" />

        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit: formikSubmit,
            values,
            errors,
            touched,
            isSubmitting,
          }) => (
            <View className="w-full space-y-10 gap-4">
              <View className="gap-2">
                <Image
                  source={require("../../../assets/login.png")}
                  className="w-full h-[200px] my-5"
                  resizeMode="contain"
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
              </View>

              <Button
                title="Acceder"
                onPress={formikSubmit}
                variant="primary"
                //className={isSubmitting ? "opacity-70" : ""}
              />
            </View>
          )}
        </Formik>
        <View className="gap-2 mb-10 space-y-2">
          <Pressable
            onPress={() => navigation.navigate("ForgotPassword" as never)}
          >
            <Text className="text-lg text-center text-cyan-500">
              Olvidé mi contraseña
            </Text>
          </Pressable>

          <Pressable onPress={() => navigation.navigate("Register" as never)}>
            <Text className="text-lg text-center text-cyan-500">
              Crear nueva cuenta
            </Text>
          </Pressable>
        </View>
      </View>
    </Container>
  );
});
