import React, { Fragment, ReactNode } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { NameHeader } from "../components/TitleText";

interface ErrorBoundaryState {
  hasError: boolean;
}

interface ErrorBoundaryProps {
  children: ReactNode;
  userName: string | undefined;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error caught by Error Boundary:", error, errorInfo);
  }

  resetError = () => {
    this.setState({ hasError: false });
  };

  render() {
    const { userName } = this.props;
    if (this.state.hasError) {
      return (
        <Fragment>
          <SafeAreaView className="flex-0 bg-darkBlue" />
          <SafeAreaView className="flex-1 bg-black">
            <View className="h-[181px] bg-darkBlue p-6">
              <NameHeader>Hey Hey {userName}</NameHeader>
              <Text className="text-white font-medium text-base leading-[24px] mt-20">
                Something went wrong. Please try again later.
              </Text>
            </View>
            <View className="flex-1 bg-black"></View>
          </SafeAreaView>
        </Fragment>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
