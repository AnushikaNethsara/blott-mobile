import React from "react";
import { Text, TextProps } from "react-native";

interface ParagraphTextProps extends TextProps {
  children: React.ReactNode;
  styleClass?: string;
}

export const ParagraphText: React.FC<ParagraphTextProps> = ({
  children,
  styleClass,
  style,
  ...props
}) => {
  return (
    <Text
      className={`text-nickel font-normal text-base font-roboto leading-[24px] ${styleClass}`}
      style={style}
      {...props}
    >
      {children}
    </Text>
  );
};
