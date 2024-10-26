import React, { Fragment, useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from "react-native";
import Card from "../components/Card";
import { formatDate } from "../utils/utils";
import { useUserData } from "../hooks/useUserData";
import { fetchNews, NewsItem } from "../services/newsService";
import { NameHeader } from "../components/TitleText";

export default function DashboardScreen() {
  const { userData } = useUserData();
  const [newsData, setNewsData] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getNews = async () => {
      try {
        const data = await fetchNews();
        setNewsData(data);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    getNews();
  }, []);

  return (
    <Fragment>
      <SafeAreaView className="flex-0 bg-darkBlue" />
      <SafeAreaView className="flex-1 bg-black">
        <View className="h-[181px] bg-darkBlue p-6">
          <NameHeader>Hey {userData?.firstName}</NameHeader>
        </View>

        <View className="flex-1 bg-black">
          {!loading ? (
            <FlatList
              className="mt-[-80px]"
              data={newsData}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <Card
                  thumbnail={item.image}
                  source={item.source}
                  date={formatDate(item.datetime)}
                  title={item.headline}
                />
              )}
            />
          ) : (
            <ActivityIndicator />
          )}
        </View>
      </SafeAreaView>
    </Fragment>
  );
}
