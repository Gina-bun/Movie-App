export interface Movie {
    id: number
    title: string
    type: "movie" | "tv" | "series" | "documentary" 
    genre: string
    releaseDate: string
    rating: number
    description: string

}

