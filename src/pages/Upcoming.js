import React, { useState, useEffect } from 'react';
import { fetchMovies } from '../utils/api'
import MovieCard from '../components/MovieCard';
import Pagination from '../components/Pagination';
// import './Upcoming.css'; // Optional, for separate styling

const Upcoming = () => {
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const fetchUpcomingMovies = async () => {
            const data = await fetchMovies('upcoming', currentPage); // Use 'upcoming' endpoint
            setMovies(data.results);
            setTotalPages(data.total_pages);
        };
        fetchUpcomingMovies();
    }, [currentPage]);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="upcoming">
            <h1>Upcoming Movies</h1>
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

export default Upcoming;
