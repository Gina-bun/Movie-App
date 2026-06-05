import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3"
const API_KEY = import.meta.env.VITE_API_KEY

export const getMovies = async (genreId: number) => {

    const response = await axios.get(`${BASE_URL}/discover/movie`, {
    params: {api_key: API_KEY, with_genres: genreId}
})
    return response.data.results
}

export const getTrendingMovies = async () => {
    const response = await axios.get(`${BASE_URL}/trending/movie/week`, {
        params: {api_key: API_KEY}
    })
    return response.data.results

    console.log(response.data.results)
}

export const getGenres = async () => {
    const response = await axios.get(`${BASE_URL}/genre/movie/list`, {
        params: {api_key: API_KEY}
    })

    return response.data.genres
}