import React, { useState, useEffect } from 'react';
import { fetchMovies } from '../utils/api';
import MovieCard from '../components/MovieCard';
import Pagination from '../components/Pagination';
// import './TopRated.css'; // Optional, for separate styling

const TopRated = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      const data = await fetchMovies('top_rated', currentPage); // Use 'top_rated' endpoint
      setMovies(data.results);
      setTotalPages(data.total_pages);
    };
    fetchTopRatedMovies();
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="top-rated">
      <h1>Top-Rated Movies</h1>
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default TopRated;
