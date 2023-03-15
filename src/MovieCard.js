import styles from "./MovieCard.css"

function MovieCard({ movie }) {
    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return (
      <li className="movieCard">
        <img
          width={200}
          height={300}
          className="movieImage"
          src={imageUrl}
          alt={movie.title}
        />
        <div className="movieTitle">{movie.title}</div>
      </li>
    );
  }
  export default MovieCard;