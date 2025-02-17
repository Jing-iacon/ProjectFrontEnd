import { Link } from "react-router-dom";
import type { AnimeResult } from "../api/types/AnimeResult";

interface AnimeListItemProps {
    result: AnimeResult;
}

export default function AnimeListItem({result}:  AnimeListItemProps) {
    return (
                    <div className="group relative">
                        <Link to={`/details/${result.mal_id}`}>
                        <img src={result.images.jpg?.large_image_url} alt="No Image Available" className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"/>
                        </Link>
                            <Link to={`/details/${result.mal_id}`} className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <span aria-hidden="true" className="absolute inset-0"></span>
                                        {result.title}
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">{result.type}</p>
                                </div>
                            
                            </Link>
                    </div>    
    )
}