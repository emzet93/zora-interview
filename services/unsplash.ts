import axios, { AxiosResponse } from "axios";
import { PaginatedResponse, UnsplashImage } from "@/types/image";

const unsplashApiKey = "ukJyK7f_oSD8sRs6GytnZxaxCnv8XCiFi05QKrF_BeQ";

export const unsplashApi = axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: `Client-ID ${unsplashApiKey}`,
  },
});

export const fetchSearchImages = async (
  query: string,
  page = 1,
  perPage = 30,
) => {
  const response: AxiosResponse<PaginatedResponse<UnsplashImage>> =
    await unsplashApi.get("search/photos", {
      params: {
        query,
        page,
        per_page: perPage,
      },
    });

  return response.data;
};

export const fetchImageDetails = async (id: string) => {
  const response: AxiosResponse<UnsplashImage> = await unsplashApi.get(
    `photos/${id}`,
  );
  return response.data;
};
