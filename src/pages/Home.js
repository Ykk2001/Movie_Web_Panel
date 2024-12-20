import React, { useState, useEffect } from 'react';
import { fetchMovies } from '../utils/api';
import MovieCard from '../components/MovieCard';
import Pagination from '../components/Pagination';
//import './Home.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const data = await fetchMovies('popular', currentPage);
        setMovies(data.results);
        setTotalPages(data.total_pages);
      }
      catch (error) {
        console.error("Error fetching movies:", error);
      }
    }
    fetchPopularMovies();
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="home">
      <h1>Popular Movies</h1>
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

export default Home;
