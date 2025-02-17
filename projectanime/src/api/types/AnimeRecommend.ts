export interface AnimeRecommend {
    data: [
        {
            mal_id: string
            entry: [
                {
                    mal_id: 0,
                    url: string,
                    images: {
                        jpg: {
                            image_url: string,
                            small_image_url: string,
                            large_image_url: string
                        },
                        webp: {
                            image_url: string,
                            small_image_url: string,
                            large_image_url: string
                        }
                    },
                    title: string
                }
            ],
            content: string,
            user: {
                url: string,
                username: string
            }
        }
    ],
}