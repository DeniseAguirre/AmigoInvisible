import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "@/screens/Home/HomeScreen";
import { AuthNavigator } from "./AuthNavigator";
import { useAuthUser } from "@/store/auth";

/**
 * Lista de parámetros para el stack principal
 */
export type RootStackParamList = {
  Auth: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

/**
 * Navegador principal de la aplicación
 * Maneja la navegación condicional basada en el estado de autenticación
 */
export const Navigation = () => {
  const user = useAuthUser();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {user ? (
          <Stack.Screen name="Home" component={HomeScreen} />
        ) : (
          <Stack.Screen name="Auth" component={AuthNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
