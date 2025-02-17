
import type { AnimeDetails } from "../api/types/AnimeDetail";

interface AnimeDetailsItemProps {
    details: AnimeDetails;

    
}


export default function AnimeDetailsItem({
  details: {
    data: {
      images,
      title,
      title_japanese,
      type,
      duration,
      synopsis,
      background,
      aired,
      status,
      genres,
    }
  },
}: AnimeDetailsItemProps) {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-6 ">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-6 ">
        {/* Anime Poster */}
        <div className="w-full md:w-1/4">
          <img
            src={images.jpg?.large_image_url}
            alt="Naruto Poster"
            className="w-full rounded-lg"
          />
        </div>

        {/* Anime Detail */}
        <div className="w-full md:w-3/4">
          <h1 className="text-3xl font-bold">
            {title} • {title_japanese}
          </h1>
          <div className="flex items-center gap-2 mt-2">
            <span className="bg-green-600 px-2 py-1 rounded text-sm">
              {type}
            </span>
            <span className="text-gray-400">• {duration}</span>
          </div>

          <p className="mt-4 text-gray-300 text-justify">{synopsis}</p>

          <div className="flex gap-4 mt-4">
            <button className="px-6 py-2 rounded-lg bg-sky-500 hover:bg-sky-700">
              + Add to List
            </button>
          </div>
        </div>
      </div>

      {/* Anime Info */}
      <div className="max-w-5xl mx-auto mt-8">
        <div className="bg-gray-800 p-4 rounded-lg">
          <p>
            <span className="font-bold">Japanese:</span> {title_japanese}{" "}
          </p>
          <p>
            <span className="font-bold">Synonyms:</span> {background}
          </p>
          <p>
            <span className="font-bold">Aired:</span> {aired?.string}
          </p>
          <p>
            <span className="font-bold">Duration:</span> {duration}
          </p>
          <p>
            <span className="font-bold">Status:</span> {status}
          </p>
          <div className="flex gap-2 mt-2">
            {genres?.map((e) => {
              return (
                <span className="bg-gray-700 px-2 py-1 rounded" key={e.name}>
                  {e.name}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}