import React, { useState } from "react";
import { View, KeyboardAvoidingView, Platform, Text } from "react-native";
import { TitleText } from "../components/TitleText";
import { ParagraphText } from "../components/ParagraphText";
import { InputField } from "../components/InputField";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { RoundButton } from "../components/Button";
import { useUserData } from "../hooks/useUserData";

export default function LegalNameScreen() {
  const router = useRouter();
  const { saveUserData } = useUserData();
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
  });
  const isSubmitDisabled =
    !formValues.firstName.trim() || !formValues.lastName.trim();

  const handleNextPress = async () => {
    saveUserData(formValues);
    router.push("/notification");
  };

  const handleInputChange = (field: string, value: string) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [field]: value,
    }));
  };

  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View className="flex-1 p-8">
          <TitleText styleClass="mb-8 text-3xl">Your legal name</TitleText>
          <ParagraphText>
            We need to know a bit about you so that we can create your account.
          </ParagraphText>
          <InputField
            placeholder="First name"
            onChangeText={(value) => handleInputChange("firstName", value)}
          />
          <InputField
            placeholder="Last name"
            onChangeText={(value) => handleInputChange("lastName", value)}
          />
        </View>
        <View className="absolute bottom-8 right-8">
          <RoundButton onPress={handleNextPress} disabled={isSubmitDisabled} />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
