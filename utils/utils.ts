import AsyncStorage from "@react-native-async-storage/async-storage";

type KeyType = "userData";

export const storeData = async <T>(key: KeyType, value: T): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    console.error("Error saving data:", error);
  }
};

export const getData = async <T>(key: KeyType): Promise<T | null> => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? (JSON.parse(jsonValue) as T) : null;
  } catch (error) {
    console.error("Error reading data:", error);
    return null;
  }
};

export const removeData = async (key: KeyType): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key);
    console.log(`Key "${key}" has been removed from AsyncStorage.`);
  } catch (e) {
    console.error(`Error removing key "${key}":`, e);
  }
};

export const formatDate = (timestamp: number): string => {
  const date = new Date(timestamp * 1000);
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  return date.toLocaleDateString("en-GB", options);
};
