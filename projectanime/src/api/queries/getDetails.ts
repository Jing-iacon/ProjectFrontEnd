import type { AnimeDetails } from "../types/AnimeDetail";


export async function getDetails(mal_id:number): Promise<AnimeDetails> {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${mal_id}`); // 
    const data = await res.json();

    return data as AnimeDetails;
}