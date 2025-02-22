const API_KEY = "3d6113a913a0c6d5def6775a07ec4ec7"
const BASE_ERL = "https://api.themoviedb.org/3"

export const getPopularMovies = async () => {
    const response = await fetch (`${BASE_ERL}/movie/popular?api_key=${API_KEY}`)
    const data = await response.json()
    return data.results
} 

export const searchMovies = async (query) => {
    const response = await fetch (
        `${BASE_ERL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
            query
        )}`
        )
    const data = await response.json()
    return data.results
} 