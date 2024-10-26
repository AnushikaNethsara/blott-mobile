import React from "react";
import { TextInput, TextInputProps } from "react-native";

interface InputFieldProps extends TextInputProps {}

export const InputField: React.FC<InputFieldProps> = ({
  style,
  placeholder,
  ...props
}) => {
  return (
    <TextInput
      className="border-b border-[#D4D4D4] placeholder-[#A3A3A3] text-xl py-4 w-[327px] font-cynical font-normal font-roboto mt-6"
      placeholder={placeholder}
      placeholderTextColor="#A3A3A3"
      {...props}
    />
  );
};
