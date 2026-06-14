import { MovieCategory } from "./movie-category/MovieCategory"
import { getMovieGenres, getTVGenres } from "../../../services/api_service"
import { useEffect, useState } from "react"

export function MovieCollection(){

    const [movieGenres, setMovieGenres] = useState<any[]>([])
    const [tvGenres, setTVGenres] = useState<any[]>([])

    useEffect(() => {
        // getMovieGenres().then((genres) => {
        //     setGenres(genres)

        // })
        getMovieGenres().then(setMovieGenres)
        getTVGenres().then(setTVGenres)
    }, [])

    return (
        <>
        <div className="collection p-2">
            {
                movieGenres.map((genre: any) => (
                    <MovieCategory
                    key={`movie-${genre.id}`}
                    genre={genre.name}
                    genreId={genre.id}  
                    mediaType="movie"               
                     />
                ))
            }
               {
                tvGenres.map((genre: any) => (
                    <MovieCategory
                    key={`tv-${genre.id}`}
                    genre={genre.name}
                    genreId={genre.id}  
                    mediaType="tv"               
                     />
                ))
            }
        </div>
        </>
    )
}