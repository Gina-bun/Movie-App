import axios from "axios";

// FOR MOVIES
const BASE_URL = "https://api.themoviedb.org/3"
const API_KEY = import.meta.env.VITE_API_KEY

//to fetch movies by genre
export const getMovies = async (genreId: number, mediaType: 'movie' | 'tv' = 'movie') => {

    const response = await axios.get(`${BASE_URL}/discover/${mediaType}`, {
    params: {api_key: API_KEY, with_genres: genreId}
})
    return response.data.results
}

//to fetch trending movies
export const getTrendingMovies = async () => {
    const response = await axios.get(`${BASE_URL}/trending/movie/week`, {
        params: {api_key: API_KEY}
    })
    return response.data.results

    console.log(response.data.results)
}

//to fetch movie genres
export const getMovieGenres = async () => {
    const response = await axios.get(`${BASE_URL}/genre/movie/list`, {
        params: {api_key: API_KEY}
    })

    return response.data.genres
}

//to fetch movies (for details)
export const getMovieDetails = async (movieId: number) => {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
        params: {api_key: API_KEY, append_to_response: "videos,credits,similar"}
    })

    return response.data 
}

//to search movies
export const searchMovies = async (searchedMovie: string) => {
    const response = await axios.get(`${BASE_URL}/search/multi`, {
        params: {api_key: API_KEY, query: searchedMovie}
    })

    return response.data.results.slice(0, 5)//display only 5 movies in search results at a time
}

// FOR TV shows
//get genres for tv shows
export const getTVGenres = async () => {
    const response = await axios.get(`${BASE_URL}/genre/tv/list`, {
        params: {api_key: API_KEY}
    })
    return response.data.genres
}

//get tv show details
export const getTVDetails = async (id: number) => {
    const response = await axios.get(`${BASE_URL}/tv/${id}`, {
        params: { 
            api_key: API_KEY,
            append_to_response: "videos,credits,similar"
        }
    })
    return response.data
}
