import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "@/screens/Auth/LoginScreen";

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
      {/* Las pantallas Register y ForgotPassword se agregarán cuando se implementen */}
    </Stack.Navigator>
  );
}
