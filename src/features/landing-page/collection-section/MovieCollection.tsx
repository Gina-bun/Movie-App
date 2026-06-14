import { MovieCategory } from "./movie-category/MovieCategory"
import { getMovieGenres, getTVGenres } from "../../../services/api_service"
import { useEffect, useState } from "react"

export function MovieCollection(){

    const [genres, setGenres] = useState<any[]>([])

    useEffect(() => {
        getMovieGenres().then(setGenres)
       
    }, [])

    return (
        <>
        <div className="collection p-2">
             {genres.map((genre: any) => (
                <MovieCategory
                    key={genre.id}
                    genre={genre.name}
                    genreId={genre.id}
                />
            ))}
        </div>
        </>
    )
}