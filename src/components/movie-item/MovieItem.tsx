import { useContext } from "react";
import { WatchlistContext } from "../../context/WatchlistContext";
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
  const { addToWatchlist } = useContext(WatchlistContext);

  const content = (
    <div className="movie-item flex flex-col shrink-0 border rounded-sm h-67 bg-amber-200 w-50">
      <div
        className="movie-poster h-40 flex justify-end p-1"
        style={{
          backgroundImage: `url(${movieUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "fill-available",
        }}
      >
        <Bookmark
          style={{ color: "gray" }}
          onClick={() => {
            if (movieId === undefined) return
            addToWatchlist({
              movieId,
              movieUrl,
              title,
              releaseDate,
            })
          }}
        />
      </div>
      <div className="movie-info h-fit px-2 pt-1 ">
        <p className="movie-title text-wrap">{title}</p>
        <p className="movie-date">{releaseDate}</p>
      </div>
    </div>
  );

  if (movieId === null || movieId === undefined) return content;
  return (
    <>
      <Link to={`/movie/${movieId}`}>{content}</Link>
    </>
  );
}
