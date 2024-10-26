import { Stack } from "expo-router";
import "../global.css";
import ErrorBoundary from "./ErrorBoundary";
import { useUserData } from "../hooks/useUserData";
import { useFonts, Raleway_400Regular } from "@expo-google-fonts/raleway";
import { Rubik_400Regular } from "@expo-google-fonts/rubik";
import { Roboto_400Regular } from "@expo-google-fonts/roboto";
import SplashScreen from "./splash";

export default function RootLayout() {
  const { userData } = useUserData();
  const [fontsLoaded] = useFonts({
    Raleway_400Regular,
    Rubik_400Regular,
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return <SplashScreen />;
  }

  return (
    <ErrorBoundary userName={userData?.firstName}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </ErrorBoundary>
  );
}
