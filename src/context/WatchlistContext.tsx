import { createContext, useContext } from 'react'
import { useState } from 'react'

export const WatchlistContext = createContext()


export const WatchlistProvider = ({children}) => {
    const [watchlist, setWatchlist] = useState([])

    const addToWatchlist = (movie) => {
        setWatchlist(prev => [...prev, movie])
    }

    const removeFromWatchlist = (movieId) => {
        setWatchlist(prev => prev.filter(movie => movie.id !== movieId))
    }

    return (
        <WatchlistContext.Provider value={{watchlist, addToWatchlist, removeFromWatchlist}}>
            {children}
        </WatchlistContext.Provider>
    )
}

export const useWatchlist = () => useContext(WatchlistContext)
