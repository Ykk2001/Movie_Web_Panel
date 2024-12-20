import React from "react";
import '../styles/moviecard1.css'
const MovieCard1 = ({ movie }) => {
    if (!movie) return null;
    return (
        <div className="movie-card">
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title|| "Movie Poster"}
                className="movie-poster"
            />
            <div className="movie-info">
                <h1>{movie.title}</h1>
                <p><strong>Rating:</strong> {movie.vote_average}</p>
                <p><strong>Runtime:</strong> {movie.runtime} min</p>
                <p><strong>Genres:</strong> {movie.genres.map((genre) => genre.name).join(", ") || "N/A"}</p>
                <p><strong>Release Date:</strong> {movie.release_date}</p>
                <p><strong>Overview:</strong> {movie.overview}</p>
            </div>
        </div>
    );
};

export default MovieCard1;
