import axios from "axios";



const BASE_URL = "https://api.themoviedb.org/3"
const API_KEY = import.meta.env.VITE_API_KEY

//to fetch movies by genre
export const getMovies = async (genreId: number) => {

    const response = await axios.get(`${BASE_URL}/discover/movie`, {
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
export const getGenres = async () => {
    const response = await axios.get(`${BASE_URL}/genre/movie/list`, {
        params: {api_key: API_KEY}
    })

    return response.data.genres
}

//to fetch movie details
export const getMovieDetails = async (movieId: number) => {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
        params: {api_key: API_KEY}
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