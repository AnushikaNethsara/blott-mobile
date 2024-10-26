import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

interface ButtonProps {
  title: string;
  onPress: () => void;
  textColor?: string;
  styleClass?: string;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  styleClass,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`w-[327px] h-[48px] rounded-[24px] bg-primary flex items-center justify-center ${styleClass}`}
    >
      <Text className="text-base font-semibold text-alabaster">{title}</Text>
    </TouchableOpacity>
  );
};

interface RoundButtonProps {
  onPress: () => void;
  disabled?: boolean;
}

export const RoundButton: React.FC<RoundButtonProps> = ({
  onPress,
  disabled = false,
}) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <View
        className={`w-14 h-14 rounded-full flex items-center justify-center ${
          disabled ? "bg-disableBlue" : "bg-primary"
        }`}
      >
        <AntDesign name="right" size={24} color="white" />
      </View>
    </TouchableOpacity>
  );
};
