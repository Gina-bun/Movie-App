
import { getMovieDetails } from "../../services/api_service"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"



export function MovieDetailsPage(){
    const {movieId} = useParams<{movieId?: string}>()
    const [movieItem, setMovieItem] = useState<any>(null)

    useEffect(() => {
        if(!movieId) return

        const idNum = Number(movieId)
        if (isNaN(idNum)) return

        getMovieDetails(idNum)
           .then(setMovieItem)
           .catch(console.error)
    },[movieId])

    if (!movieItem) {
        return <div>Loading...</div>
    }

    return (
        <>
        <h1>{movieItem.title}</h1>
        </>
    )
}