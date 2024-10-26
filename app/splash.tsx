import { View } from "react-native";
import Logo from "../assets/Logo.svg";

export default function SplashScreen() {
  return (
    <View className="flex-1 bg-black justify-center items-center">
      <Logo width={188} height={188} />
    </View>
  );
}
