export interface AnimeDetails {
  data: {
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
    title_japanese?: string;
    title_synonyms?: string[];
    background?:string;
    type?: string;
    status?: string;
    aired?: {
      from?: string;
      to?: string;
      string:string;
    };
    duration?: string;
    synopsis?: string;
    genres?: Genre[];
  };
}

interface Genre {
  name: string;
}
