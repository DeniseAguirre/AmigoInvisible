import React from "react";
import { Pressable, View, Text } from "react-native";

interface CheckboxProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
  error?: string;
  label?: string;
}

export const Checkbox = React.memo(
  ({ value, onValueChange, error, label }: CheckboxProps) => {
    return (
      <View className="flex-row items-center">
        <Pressable
          onPress={() => onValueChange(!value)}
          className={`h-6 w-6 items-center justify-center rounded border-2 ${
            value
              ? "bg-secondary-500 border-secondary-500"
              : "border-neutral-300"
          }`}
        >
          {value && (
            <Text className="text-white text-sm font-bold leading-none">✓</Text>
          )}
        </Pressable>
        <View className="flex-1 ml-2">
          {label && <Text className="text-sm text-neutral-600">{label}</Text>}
          {error && <Text className="text-xs text-red-500 mt-1">{error}</Text>}
        </View>
      </View>
    );
  }
);
