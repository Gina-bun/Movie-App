import { createContext, useContext, useEffect } from 'react'
import { useState } from 'react'
import type { Movie } from '../types/movie'

export const WatchlistContext = createContext()


export const WatchlistProvider = ({children}) => {
    const [watchlist, setWatchlist] = useState<Movie[]>(() => {
         const savedMovies = localStorage.getItem("savedMovies")
         return savedMovies ? JSON.parse(savedMovies) : []
    })

    const addToWatchlist = (movie: Movie) => {
        const hasMovie = watchlist.some((item) => item.movieId === movie.movieId )
        if(!hasMovie){
              setWatchlist(prev => [...prev, movie])
        }
      
    }

    const removeFromWatchlist = (movieId: number) => {
        setWatchlist(prev => prev.filter(movie =>  movie.movieId !== movieId))
    }

    //to update/save movies to the watchlist
    useEffect(() => {
        localStorage.setItem("savedMovies", JSON.stringify(watchlist))
    },[watchlist])

    return (
        <WatchlistContext.Provider value={{watchlist, addToWatchlist, removeFromWatchlist}}>
            {children}
        </WatchlistContext.Provider>
    )
}

export const useWatchlist = () => useContext(WatchlistContext)
