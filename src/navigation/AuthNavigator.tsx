import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "@/screens/Auth/LoginScreen";
import { RegisterScreen } from "@/screens/Auth/RegisterScreen";
import { ForgotPasswordScreen } from "@/screens/Auth/ForgotPasswordScreen";

/**
 * Lista de parámetros para el stack de autenticación
 */
export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

/**
 * Navegador para las pantallas de autenticación
 */
export function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    </Stack.Navigator>
  );
}
