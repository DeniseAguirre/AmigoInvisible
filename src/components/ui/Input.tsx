import React from "react";
import { TextInput, TextInputProps, View, Text } from "react-native";
import "../../../global.css";

interface InputProps extends Omit<TextInputProps, "className"> {
  error?: string;
  label?: string;
}

export const Input = React.memo(({ error, label, ...props }: InputProps) => {
  return (
    <View className="w-full space-y-1">
      {label && (
        <Text className="text-sm font-medium text-gray-700">{label}</Text>
      )}
      <TextInput
        className={`w-full px-4 py-3 bg-white border rounded-lg ${
          error ? "border-red-500" : "border-gray-200"
        }`}
        placeholderTextColor="#9CA3AF"
        {...props}
      />
      {error && <Text className="text-xs text-red-500">{error}</Text>}
    </View>
  );
});
