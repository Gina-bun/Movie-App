import {useWatchlist} from "../../context/WatchlistContext"
import { MovieItem } from "../../components/movie-item/MovieItem"


export function WatchListPage(){
    const {watchlist} = useWatchlist()

    return (
        <>
        <h1 className="text-center text-4xl">Watch List Page</h1>
        <div>
            {
                watchlist.map((movie) => (
                   <MovieItem
                      key={movie.movieId}
                      movieId={movie.movieId}
                      movieUrl={movie.movieUrl}
                      title={movie.title}
                      releaseDate={movie.releaseDate}
                      />
                ))
            }
        </div>
        </>
    )
}