import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3"
const API_KEY = import.meta.env.VITE_API_KEY

export const getMovies = async (genreId: number) => {

    const response = await axios.get(`${BASE_URL}/discover/movie`, {
    params: {api_key: API_KEY, with_genres: genreId}
})
    return response.data.results
}

//to search movies
export const searchMovies = async (searchedMovie) => {
    const response = await axios.get(`${BASE_URL}/search/multi`, {
        params: {api_key: API_KEY, query: searchedMovie}
    })

    return response.data.results
}