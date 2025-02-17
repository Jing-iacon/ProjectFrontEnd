export interface AnimeResult {
  mal_id: number;
  url: string;
  images: {
    jpg?: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
    webp?: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
  };
  title: string;
  title_english?: string;
  title_synonyms?: string[];
  type?: string;
  status?: string;
  aired?: {
    from?: string;
    to?: string;
  };
  duration?: string;
  synopsis?: string;
  genres?: Genre[];
}

interface Genre {
  name: string;
}