import { MovieItem } from "../../../../components/movie-item/MovieItem"
import { getMovies } from "../../../../services/api_service"
import { useEffect, useState } from "react"

export function MovieCategory({genre, genreId}: {genre:string, genreId:number}){
    const [movies, setMovies] = useState<any>([])

    useEffect(() => {
        getMovies(genreId).then((movies) => {
            setMovies(movies)
        })
    }, [genreId])

    return (
        <>
        <div className="category py-3">
            <h1 className="text-2xl font-bold">{genre}</h1>
            <div className="movie-lineup grid grid-cols-2 gap-2">
                {movies.map((movie) => (
                    <MovieItem
                    key={movie.id}
                    movieUrl={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                    title={movie.title}
                    releaseDate={movie.release_date}
                    />
                ))}
            </div>
        </div>
        </>
    )
}