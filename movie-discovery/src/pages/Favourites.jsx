import "../css/Favorites.css";
import React from "react";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favourites() {
  const { favourites } = useMovieContext();

  if (favourites) {
    return (
      <div className="favorites">
        <h2>Favourites</h2>
        <div className="moviesGrid">
          {favourites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="favorites-empty">
      <h2>No favourite movies yet</h2>
      <p>Start adding to favourites to appear</p>
    </div>
  );
}

export default Favourites;
