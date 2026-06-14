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
  releaseDate: number | string;
}) {
  const { addToWatchlist, removeFromWatchlist, watchlist } = useContext(WatchlistContext);
  

  const addRemoveMovieToggle = () => {
    if (movieId === undefined) return

    const hasMovie = watchlist.some((item) => item.movieId === movieId);

    if (hasMovie) {
      removeFromWatchlist(movieId);
    }else {
      addToWatchlist({
        movieId,
        movieUrl,
        title,
        releaseDate,
        genreId, genre
      });
    }
  };

  const content = (
    <div className="movie-item flex flex-col shrink-0 border rounded-sm h-67 bg-amber-200 w-50">
      <div
        className="movie-poster h-40 flex justify-end p-1 bg-gray-200"
        style={{
          backgroundImage: `url(${movieUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "fill-available",
        }}
      >
        <Bookmark
          style={{ color: "gray" }}
          onClick={(e) => {
            e.stopPropagation()
            e.preventDefault()
            if (movieId === undefined) return;
            addRemoveMovieToggle()
          }}
        />
      </div>
      <div className="movie-info h-fit px-2 pt-1 ">
        <p className="movie-title text-wrap">{title}</p>
        <p className="genre">{genre}</p>
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
