import React from "react";
import { Text, TextProps } from "react-native";

interface TitleTextProps extends TextProps {
  children: React.ReactNode;
  styleClass?: string;
}

export const TitleText: React.FC<TitleTextProps> = ({
  children,
  style,
  styleClass,
  ...props
}) => {
  return (
    <Text
      className={` text-cynical font-bold leading-[37.5px] font-roboto ${styleClass}`}
      style={style}
      {...props}
    >
      {children}
    </Text>
  );
};

export const NameHeader: React.FC<TitleTextProps> = ({
  children,
  style,
  styleClass,
  ...props
}) => {
  return (
    <Text
      className={`text-white font-[900px] text-[32px]  font-raleway ${styleClass}`}
      style={style}
      {...props}
    >
      {children}
    </Text>
  );
};
