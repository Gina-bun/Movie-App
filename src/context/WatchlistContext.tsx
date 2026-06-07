import { createContext, useContext, useState, type ReactNode } from 'react'

interface Movie {
    movieId: number | string
    movieUrl: string
    title: string
    releaseDate: string
}

interface WatchlistContextType {
    watchlist: Movie[]
    addToWatchlist: (movie: Movie) => void
    removeFromWatchlist: (movieId: number | string) => void
}


export const WatchlistContext = createContext<WatchlistContextType>({
    watchlist : [],
    addToWatchlist: () => {},
    removeFromWatchlist: () => {},
})


export const WatchlistProvider = ({children}: {children: ReactNode}) => {
    const [watchlist, setWatchlist] = useState<Movie[]>([])

    const addToWatchlist = (movie: Movie) => {
        setWatchlist(prev => [...prev, movie])
    }

    const removeFromWatchlist = (movieId: number | string) => {
        setWatchlist(prev => prev.filter(movie => movie.movieId !== movieId))
    }

    return (
        <WatchlistContext.Provider value={{watchlist, addToWatchlist, removeFromWatchlist}}>
            {children}
        </WatchlistContext.Provider>
    )
}

export const useWatchlist = () => useContext(WatchlistContext)
