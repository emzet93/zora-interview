export interface UnsplashImage {
  id: string;
  width: number;
  height: number;
  likes: number;
  description: string;
  user: {
    id: string;
    name: string;
    username: string;
  };
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
}

export interface PaginatedResponse<ItemType> {
  total: number;
  total_pages: number;
  results: ItemType[];
}
