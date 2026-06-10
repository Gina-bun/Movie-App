import {useWatchlist} from "../../context/WatchlistContext"
import { MovieItem } from "../../components/movie-item/MovieItem"


export function WatchListPage(){
    const {watchlist} = useWatchlist()

    return (
        <>
        <h1 className="text-center text-2xl">Watch List Page</h1>
        <div className="grid grid-cols-2">
            {watchlist.length === 0 ? (
                <p>No movies saved yet</p>
            ): (
                watchlist.map((movie) => (
                 
                      <MovieItem
                      key={movie.movieId}
                      movieId={movie.movieId}
                      movieUrl={movie.movieUrl}
                      title={movie.title}
                      releaseDate={movie.releaseDate}
                      />
                
                ))
            )}
        </div>
        </>
    )
}