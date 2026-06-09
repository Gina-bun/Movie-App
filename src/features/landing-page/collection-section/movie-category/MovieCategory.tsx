import { ChevronLeft, ChevronRight } from "lucide-react"
import { MovieItem } from "../../../../components/movie-item/MovieItem"
import { getMovies } from "../../../../services/api_service"
import { useEffect, useRef, useState } from "react"

export function MovieCategory({genre, genreId}: {genre:string, genreId:number}){
    const [movies, setMovies] = useState<any>([])
    const rowRef = useRef<HTMLDivElement>(null)

    const scrollLeft = () => {
        rowRef.current?.scrollBy({left: -300, behavior: "smooth"})
    }

    const scrollRight = () => {
        rowRef.current?.scrollBy({left: 300, behavior: "smooth"})
    }

    useEffect(() => {
        getMovies(genreId).then((movies) => {
            setMovies(movies)
        })
    }, [genreId])

    return (
        <>
        <h1 className="text-2xl font-bold pl-5.5 md:pl-12">{genre}</h1>
        <div className="flex category py-3 items-center">
            
             <ChevronLeft size={120} onClick={scrollLeft}/>
            <div 
            className="movie-lineup flex-nowrap flex gap-2"
            style={{overflowX: "auto", whiteSpace: "nowrap",  scrollbarWidth: "none"}}
            ref={rowRef}
            >
                {movies.map((movie) => (
                    <MovieItem
                    movieId={movie.id}
                    key={movie.id}
                    movieUrl={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                    title={movie.title}
                    releaseDate={movie.release_date}
                    />
                ))}
               
            </div>
             <ChevronRight size={120} onClick={scrollRight}/>
        </div>
        </>
    )
}