import React from "react";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../../components/ui/Button";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import "../../../global.css";

import { RootStackParamList } from "../../types/navigation";
type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <SafeAreaView className="flex-1 bg-red">
      <View className="flex-1 p-5 items-center justify-between">
        <Text className="text-3xl font-bold text-gray-800 mt-10">
          Amigo Invisible
        </Text>

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
    </SafeAreaView>
  );
};
