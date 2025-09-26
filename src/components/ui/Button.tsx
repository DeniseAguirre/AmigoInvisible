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
        ${
          variant === "primary"
            ? "bg-primary-500"
            : "bg-transparent border-2 border-primary-500"
        }`}
    >
      <Text
        className={`text-xl font-semibold
          ${variant === "primary" ? "text-white" : "text-primary-500"}`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};
