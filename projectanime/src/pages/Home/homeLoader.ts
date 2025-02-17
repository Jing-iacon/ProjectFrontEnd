import { getAnimeFeature } from "../../api/queries/getAnimeFeature";



export async function homeLoader() {
  // จะมี Obj เข้ามาใน loader เเล้วจะมี props ที่ขื่อ Request ดึงตัวนี้ออกมา

  const topAnime = await getAnimeFeature(); // ดึง searchResult มาใช้หรือเรียก api นั่นล่ะ
//   const seasonAnime = await getAnimeSeason(); // ดึง searchResult มาใช้หรือเรียก api นั่นล่ะ
  return {
    topAnime,
    // seasonAnime,
  };
}
