import React from "react";
import { View, Image } from "react-native";
import { Button } from "../../components/ui/Button";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import "../../../global.css";

import { RootStackParamList } from "../../types/navigation";
import { Title } from "@/components/ui/Title";
import { Container } from "@/components/ui/Container";
type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <Container>
      <View className="flex-1 p-5 items-center justify-between">
        <Title title="Amigo Invisible" />
        <Image
          source={require("../../../assets/home.png")}
          className="w-full h-[300px] my-10"
          resizeMode="contain"
        />

        <View className="w-full space-y-5 mb-10">
          <Button title="Empezar" onPress={() => {}} variant="primary" />

          <View className="flex-column justify-between space-x-2">
            <Button
              title="Iniciar Sesión"
              onPress={() => navigation.navigate("Login")}
              variant="secondary"
            />
            <Button
              title="Registrarse"
              onPress={() => navigation.navigate("Register")}
              variant="secondary"
            />
          </View>
        </View>
      </View>
    </Container>
  );
};
