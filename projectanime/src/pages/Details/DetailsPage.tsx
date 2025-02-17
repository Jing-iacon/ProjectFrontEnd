import type { DetailsLoaderResult } from "./detailsLoader"
import { useLoaderData } from "react-router-dom"
import AnimeDetailsItem from "../../component/AnimeDetailsItem";

export default function DetailsPage() {

    const {details} = useLoaderData() as DetailsLoaderResult;
    console.log(details);

    return (
        <AnimeDetailsItem details={details} key={details.data.title}/>
    )
}