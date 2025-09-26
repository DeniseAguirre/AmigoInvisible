import React from "react";
import { TextInput, TextInputProps, View, Text } from "react-native";
import "../../../global.css";

interface InputProps extends Omit<TextInputProps, "className"> {
  error?: string;
  label?: string;
}

export const Input = React.memo(({ error, label, ...props }: InputProps) => {
  return (
    <View className="w-full space-y-2">
      {label && (
        <Text className="text-sm font-medium text-neutral-700">{label}</Text>
      )}
      <TextInput
        className={`w-full px-4 py-3 bg-surface-background border rounded-lg ${
          error ? "border-red-500" : "border-neutral-200"
        }`}
        placeholderTextColor="#9CA3AF"
        {...props}
      />
      {error && <Text className="text-xs text-red-500">{error}</Text>}
    </View>
  );
});
