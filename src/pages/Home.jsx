import MovieCard from "../components/MovieCard";
import React, { useEffect, useState } from 'react'
import "../css/Home.css"
import { getPopularMovies, searchMovies } from "../services/api";
import Footer from "../components/Footer";


function Home() {
    const [searchQuery, setSearchQuery] = useState("")
    const [ movies, setMovies ] = useState([])
    const [ error, setError ] = useState(null)
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        const loadPopularMovies = async() => {
            try{
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            } catch(err) {
                console.log(err)
                setError("Failed to load the movie....")
            }
            finally {
                setLoading(false)
            }
        }
        loadPopularMovies()
    },[])

    const handleSearch = async (e) => {
        e.preventDefault()
        if (!searchQuery.trim()) return
        if (loading) return
        setLoading(true)

        try{
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            setError(null)
        }
        catch(err){
            console.log(err)
            setError("Failed to search movie.")
        } 
        finally{
            setLoading(false)
        }

    }
  return (
    <div className='home'>
        <form className='searchForm' onSubmit={handleSearch}>
            <input type="text" 
            placeholder='Search for movie...' 
            className='searchInput'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            />

            <button type='submit' className='search-button'>Search</button>
        </form>

        {error && <div className="error-message">{error}</div>}

        {loading ? <div className="loading">Loading...</div> :
        <div className="moviesGrid">
            {movies.map((movie) => (
            (
            <MovieCard movie={movie} key={movie.id}/>
            )
            ))}
        </div>
         }
         <Footer/>
    </div>
  )
}

export default Home
