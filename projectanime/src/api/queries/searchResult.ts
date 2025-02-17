import type { AnimeResult } from "../types/AnimeResult";

interface SearchResponse {
    data: {
        mal_id: number;
        url: string;
        images: {
            jpg: ImageFormats;
            webp: ImageFormats;
        };
        title: string;
        title_english: string;
        type: string;
        duration: string;
        synopsis: string;
        genres: Genre[];
        }[]
    }[]

interface ImageFormats {
    image_url: string;
    small_image_url: string;
    large_image_url: string;
}

interface Genre {
    name: string;
}

export async function searchResult(term: string): Promise<AnimeResult[]> {  // type เป็น Promise เพราะว่าใช้ async // ส่งไปให้ Loader ใช้
    const res = await fetch(`https://api.jikan.moe/v4/anime?q=${term}`) // ตัวที่เรียกใช้ searchResult ต้องส่ง term มาให้ด้วยจึงใส่ term ใน searchResult
    const data: SearchResponse = await res.json();

    return data.data.map(({mal_id, url, images, title,  type, duration,  synopsis, genres}) => { // searchResult คือ data ที่อยู่ใน array แต่ละตัว // Destructuring โดยการเอา props ออกมา 
        return { // เนื่องจากที่ชื่อใช้ชื่อเดียวกับ props จึงใช้รูปแบบด้านล่างได้เลย
            mal_id,
            url,
            images,
            title,
            type,
            duration,
            synopsis,
            genres,
        }
    });  // ใช้ map เพราะว่า data เป็นรูปแบบ array
}