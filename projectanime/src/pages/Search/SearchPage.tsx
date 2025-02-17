import { useLoaderData } from "react-router-dom"
import type { SearchLoaderResult } from "./searchLoader";
import AnimeListItem from "../../component/AnimeListItem";

export default function SearchPage() {
    
    const {searchResult} = useLoaderData() as SearchLoaderResult; // เนื่องจาก data type เป็น unknown จึงบังคับให้ tpye เป็น AnimeResults[]

     // ด้านบน ใช้ Destructuring
    
    //ข้อมูลที่ได้มาจะเป็น searchResult ตามด้วย Array ดั่งที่ return มาจาก searchLoader
    const renderResult = searchResult.map((result) => {
        return <AnimeListItem result={result} key={result.title} />;
        
    })
    
    
    return (
        <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Search Result For</h2>

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {renderResult}
            </div>



        </div>
    </div>
    )
}