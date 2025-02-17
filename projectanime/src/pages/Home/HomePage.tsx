import { useLoaderData } from "react-router-dom"

export default function HomePage() {

    const {topAnime} = useLoaderData();
    console.log("topAnime", topAnime);

    return (
        <div>
            Home Page
        </div>
    )
}