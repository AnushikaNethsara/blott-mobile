import { View } from "react-native";
import { TitleText } from "../components/TitleText";
import { ParagraphText } from "../components/ParagraphText";
import { SafeAreaView } from "react-native-safe-area-context";
import MessageLogo from "../assets/Message.svg";
import { Button } from "../components/Button";
import { useRouter } from "expo-router";
import * as Notifications from "expo-notifications";

export default function NotificationScreen() {
  const router = useRouter();
  const requestNotificationPermission = async () => {
    const { status } = await Notifications.getPermissionsAsync();
    console.log(status);
    if (status !== "granted") {
      const { status: newStatus } =
        await Notifications.requestPermissionsAsync();
    }
    router.push("/dashboard");
  };
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 p-8 justify-center">
        <View className="items-center">
          <MessageLogo width={98} height={98} />
          <TitleText styleClass="text-2xl mb-4">
            Get the most out of Blott ✅
          </TitleText>
          <ParagraphText styleClass="text-center">
            Allow notifications to stay in the loop with your payments,
            requests, and groups.
          </ParagraphText>
        </View>
      </View>
      <View className="p-8">
        <Button
          title="Continue"
          onPress={requestNotificationPermission}
          styleClass="w-full"
        />
      </View>
    </SafeAreaView>
  );
}
