import { Text } from "react-native";

interface TextProps {
  className?: string;
  title: string;
}

export const Title: React.FC<TextProps> = ({ title, className }) => {
  return (
    <Text
      className={`text-3xl font-bold text-gray-800 mt-10 ${className ?? ""}`}
    >
      {title}
    </Text>
  );
};
