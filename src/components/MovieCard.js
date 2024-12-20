import React from 'react';
import PropTypes from 'prop-types';
import '../styles/MovieCard.css';

const MovieCard = ({ movie }) => {
  const { title, poster_path, vote_average } = movie;
  const imageURL = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <div className="movie-card">
      <img src={imageURL} alt={title} className="movie-card-image" />
      <div className="movie-card-details">
        <h3 className="movie-card-title">{title}</h3>
        <p className="movie-card-rating">Rating: {vote_average}</p>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieCard;