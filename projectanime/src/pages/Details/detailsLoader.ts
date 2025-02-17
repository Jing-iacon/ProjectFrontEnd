import { getDetails } from "../../api/queries/getDetails";
import type { Params } from "react-router-dom";
import type { AnimeDetails } from "../../api/types/AnimeDetail";

interface detailsLoaderArgs {
    params:Params;
}

export interface DetailsLoaderResult {
    details: AnimeDetails;
}
// {params} : LoaderFunctionArgs
export async function detailsLoader({params}: detailsLoaderArgs): Promise<DetailsLoaderResult> { //ใน details จะรับ Argument เข้ามามี Request, Params, Contexts จะรับมาเหมือน searchLoader
    //ในที่นี้ เราดึง Params มาใช้
    const {id} = params;

    if(!id) {
        throw new Error("Id must be provided")
    }
    const details = await getDetails(Number(id));
    console.log(details);
    
    return {
        details,
    }
}