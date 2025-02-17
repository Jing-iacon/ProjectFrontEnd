import { searchResult } from "../../api/queries/searchResult";
import type { AnimeResult } from "../../api/types/AnimeResult";

export interface SearchLoaderResult{ // เป็น interface ที่ลิ้งระหว่างตัว return ของ searchLoader กับ useLoader Data
  searchResult: AnimeResult[];
}


export async function searchLoader({request} : {request: Request }): Promise<SearchLoaderResult> { // จะมี Obj เข้ามาใน loader เเล้วจะมี props ที่ขื่อ Request ดึงตัวนี้ออกมา

          const { searchParams } = new URL(request.url) // searchParams คือ queries string ที่อยู่ท้าย URL หรือสิ่งที่เราพิมพ์เข้าไป
          const term = searchParams.get("term");

          if(!term) {
            throw new Error("Search must be provided") // เงื่อนไขนี้คือ ถ้า term เป็น null จะส่งค่า error ไป เพราะกันการเข้าถึงโดยไม่ใส่ค่า term
          }

          const result = await searchResult(term); // ดึง searchResult มาใช้หรือเรียก api นั่นล่ะ
          console.log(result);
          
          return { // เพื่อที่เวลาเพิ่มข้อมูล api จะได้เพิ่มง่าย ๆ return to obj ที่ประกอบไปด้วยหลาย ๆ api
            searchResult: result, // เหตุผลในการสร้าง interface SearchLoaderResult
        };
        }


 // search loader ดึงข้อมูล จาก searchResults มาอีกที     