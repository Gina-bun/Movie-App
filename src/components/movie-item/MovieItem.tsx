import "./MovieItem.css";
import { Link } from "react-router-dom";
import { Bookmark } from "lucide-react";

export function MovieItem({
    movieId,
  movieUrl,
  title,
  releaseDate,
}: {
    movieId?: number | string;
  movieUrl: string;
  title: string;
  releaseDate: string;
}) {

    const content = (
            <div className="movie-item border rounded-sm h-55 bg-amber-200">
          <div
            className="movie-poster min-h-2/3 flex justify-end p-1"
            style={{
              backgroundImage: `url(${movieUrl})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: "fill-available",
            }}
          >
               <Bookmark style={{color: "gray"}}/>
          </div>
          <div className="movie-info h-fit p-1 ">
            <p className="movie-title">{title}</p>
            <p className="movie-date">{releaseDate}</p>
          </div>
        </div>
    )

    if (movieId === null || movieId === undefined) return content
  return (
    <>
      <Link to={`/movie/${movieId}`}>
        {content}
      </Link>
    </>
  );
}
