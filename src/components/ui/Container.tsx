import React from "react";
import { View, ViewProps } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../../../global.css";

interface ContainerProps extends Omit<ViewProps, "className"> {
  children: React.ReactNode;
  useSafeArea?: boolean;
  className?: string;
}

export const Container = React.memo(
  ({
    children,
    useSafeArea = true,
    className = "",
    ...props
  }: ContainerProps) => {
    const Wrapper = useSafeArea ? SafeAreaView : View;

    return (
      <Wrapper className={`flex-1 bg-red px-4 ${className}`} {...props}>
        {children}
      </Wrapper>
    );
  }
);
