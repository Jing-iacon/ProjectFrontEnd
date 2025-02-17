export interface AnimeFeature {
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
      trailer: {
        youtube_id: string;
        url: string;
        embed_url: string;
        images: {
          image_url: string;
          small_image_url: string;
          medium_image_url: string;
          large_image_url: string;
          maximum_image_url: string;
        }};
        approved: true;
        title: string;
        title_english: string;
        title_japanese: string;
        type: string;
        source: string;
        status: string;
        airing: true;
        aired: {
          from: string;
          to: string;
          string: string;
        };
        duration: string;
        rating: string;
        score: number;
        scored_by: number;
        rank: number;
        popularity: number;
        members: number;
        favorites: number;
        synopsis: string;
        background: string;
        broadcast: {};
        genres: [
          {
            name: string;
          }
        ];
    }
