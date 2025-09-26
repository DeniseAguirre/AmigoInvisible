import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import { Formik } from "formik";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  ForgotPasswordSchema,
  ForgotPasswordFormValues,
} from "./forgotPasswordValidation";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Input } from "@/components/ui/Input";
import { Title } from "@/components/ui/Title";
import { RootStackParamList } from "@/types/navigation";
import { ForgotPasswordService } from "@/services/auth/forgotPassword";

import "../../../global.css";

type ForgotPasswordScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "ForgotPassword"
>;

export const ForgotPasswordScreen = React.memo(() => {
  const navigation = useNavigation<ForgotPasswordScreenNavigationProp>();

  const initialValues: ForgotPasswordFormValues = {
    email: "",
  };

  const handleSubmit = async (values: ForgotPasswordFormValues) => {
    try {
      const response = await ForgotPasswordService.sendResetEmail({
        email: values.email,
      });

      alert(response.message);

      if (response.success) {
        navigation.navigate("Login");
      }
    } catch (error) {
      console.error("Error en forgot password:", error);
      alert("Error al procesar la solicitud. Intenta nuevamente.");
    }
  };

  return (
    <Container>
      <View className="flex-1 justify-between px-5">
        {/* Header con botón de retroceso */}
        <View className="pt-4">
          {/* <Pressable
            onPress={() => navigation.goBack()}
            className="mb-6 w-10 h-10 items-center justify-center"
          >
            <Text className="text-neutral-800 text-2xl font-light">‹</Text>
          </Pressable> */}

          <Title title="Olvidé mi Contraseña" className="text-center mb-4" />

          <Text className="text-neutral-600 text-base text-center mb-8 leading-relaxed">
            Introduce tu correo electrónico para{"\n"}restablecer tu contraseña
          </Text>
        </View>
        <Image
          source={require("../../../assets/password.png")}
          className="w-full h-[200px] my-5"
          resizeMode="contain"
        />
        <View className="flex-1 justify-start">
          <Formik
            initialValues={initialValues}
            validationSchema={ForgotPasswordSchema}
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
              <View className="w-full space-y-6 gap-4">
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

                <Button
                  title="Enviar"
                  onPress={formikSubmit}
                  variant="primary"
                />
              </View>
            )}
          </Formik>
        </View>

        <View className="pb-8">
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text className="text-neutral-800 text-base text-center">
              Recordé mi contraseña
            </Text>
          </Pressable>
        </View>
      </View>
    </Container>
  );
});
