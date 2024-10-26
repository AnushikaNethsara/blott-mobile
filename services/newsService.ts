import axios from 'axios';

const API_URL = process.env.EXPO_PUBLIC_API_URL;
const API_TOKEN = process.env.EXPO_PUBLIC_API_TOKEN;

export interface NewsItem {
  id: string;
  category: string;
  headline: string;
  source: string;
  datetime: number;
  image: string;
}

export const fetchNews = async (category: string = "general"): Promise<NewsItem[]> => {
  try {
    const response = await axios.get(`${API_URL}?category=${category}&token=${API_TOKEN}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error;
  }
};
