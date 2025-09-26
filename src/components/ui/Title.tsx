import { Text } from "react-native";

interface TitleProps {
  className?: string;
  title: string;
}

export const Title: React.FC<TitleProps> = ({ title, className }) => {
  return (
    <Text
      className={`text-3xl font-bold text-neutral-800 mt-10 ${className ?? ""}`}
    >
      {title}
    </Text>
  );
};
