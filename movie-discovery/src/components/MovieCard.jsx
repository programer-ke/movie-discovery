import "../css/MovieCard.css"
import { searchMovies, getPopularMovies } from "../services/Api"
import { useMovieContext } from "../contexts/MovieContext"
import { FaHeart } from "react-icons/fa";


function MovieCard({movie}) {
  const { isFavourite, addToFavourites, removeFromFavourites } = useMovieContext()
  const favourite = isFavourite(movie.id)

    function onFavouriteClick(e){
      e.preventDefault()
      if(favourite) removeFromFavourites(movie.id)
      else addToFavourites(movie)
    }

  return (
    <div className='movie-card'>
      <div className="movie-poster ">
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <div className="movie-overlay">
            <button className={`favorite-btn ${favourite ? "active" : ""}`} onClick={onFavouriteClick}>
            < FaHeart/>
            </button>
        </div>
      </div>
      <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
        </div>
    </div>
  )
}

export default MovieCard