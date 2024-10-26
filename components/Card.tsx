import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

interface CardProps {
  thumbnail: string;
  source: string;
  date: string;
  title: string;
}

const Card: React.FC<CardProps> = ({ thumbnail, source, date, title }) => {
  return (
    <TouchableOpacity className="flex-row p-4 bg-transparent rounded-lg shadow-md">
      <Image
        defaultSource={require("../assets/default-image.png")}
        source={{
          uri: thumbnail,
        }}
        className="w-[100px] h-[100px] rounded-md mr-4"
      />
      <View className="flex-1 p-4">
        <View className="flex-row justify-between">
          <Text className="text-xs text-white font-normal uppercase font-rubik">
            {source}
          </Text>
          <Text className="text-xs text-white font-normal uppercase font-rubik">
            {date}
          </Text>
        </View>
        <Text
          className="text-white mt-2 text-xl font-medium font-roboto"
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
