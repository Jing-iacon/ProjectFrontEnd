import type { AnimeFeature } from "../types/AnimeFeature";


export async function getAnimeFeature(): Promise<AnimeFeature> {
  const topAnime = await fetch(`https://api.jikan.moe/v4/top/anime?limit=10`);
  const data = await topAnime.json();

  return data;
}
