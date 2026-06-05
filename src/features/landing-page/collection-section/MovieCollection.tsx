import { MovieCategory } from "./movie-category/MovieCategory"
import { getGenres } from "../../../services/api_service"
import { useEffect, useState } from "react"

export function MovieCollection(){

    const [genres, setGenres] = useState<any>([])

    useEffect(() => {
        getGenres().then((genres) => {
            setGenres(genres)
        })
    }, [])

    return (
        <>
        <div className="collection p-2">
            {
                genres.map((genre) => (
                    <MovieCategory
                    key={genre.id}
                    genre={genre.name}
                    genreId={genre.id}                  />
                ))
            }
        </div>
        </>
    )
}