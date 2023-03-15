import movies from "./movies.json";
import styles from "./MoviesGrid.css";
import MovieCard from "./MovieCard";


function MoviesGrid() {
    console.log(movies);
    return (
        <ul className="moviesGrid">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </ul>
      );
}
export default MoviesGrid;