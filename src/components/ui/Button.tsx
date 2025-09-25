import React from "react";
import { TouchableOpacity, Text } from "react-native";
import "../../../global.css";
interface ButtonProps {
  onPress: () => void;
  title: string;
  variant?: "primary" | "secondary";
}

export const Button: React.FC<ButtonProps> = ({
  onPress,
  title,
  variant = "primary",
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`w-full py-3 px-8 rounded-full items-center justify-center
        ${variant === "primary" ? "bg-emerald-500" : "bg-transparent"}`}
    >
      <Text
        className={`text-xl font-semibold
          ${variant === "primary" ? "text-white" : "text-emerald-500"}`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};
