import {
  useInfiniteQuery,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { fetchImageDetails, fetchSearchImages } from "@/services/unsplash";
import { UnsplashImage } from "@/types/image";

export const imageQueryKeys = {
  all: ["images"] as const,
  search: (searchPhrase: string) =>
    [...imageQueryKeys.all, "search", searchPhrase] as const,
  details: (id: string) => [...imageQueryKeys.all, "details", id] as const,
};

export const useSearchImagesQuery = (query: string) =>
  useInfiniteQuery({
    queryKey: imageQueryKeys.search(query),
    queryFn: ({ pageParam }) => fetchSearchImages(query, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.total_pages === allPages.length) {
        return undefined;
      }

      return allPages.length + 1;
    },
    staleTime: 1000 * 30,
    enabled: query !== "",
  });

export const useImageDetailsQuery = (id: string) =>
  useQuery({
    queryKey: imageQueryKeys.details(id),
    queryFn: () => fetchImageDetails(id),
    staleTime: 1000 * 30,
  });

export const usePrecacheImage = () => {
  const queryClient = useQueryClient();

  return (image: UnsplashImage) => {
    queryClient.setQueryData(imageQueryKeys.details(image.id), image);
  };
};
