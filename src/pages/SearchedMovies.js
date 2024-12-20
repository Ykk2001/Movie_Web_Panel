import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { searchMovies } from '../utils/api';
import MovieCard from '../components/MovieCard';
import Pagination from '../components/Pagination';

const SearchedMovies = () => {
    const { query } = useParams();//movies name
    const [movies, setMovies] = useState([]);//store the list of movies fetched from the API.
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    // useEffect(() => {
    //     const fetchSearchedMovies = async () => {
    //         const data = await searchMovies(query, currentPage);// fetch searched movie data from the TMDB API
    //         setMovies(data.results);
    //         setTotalPages(data.total_pages);
    //     };
    //     fetchSearchedMovies();
    // }, [query, currentPage]);//Executes the fetchSearchedMovies function whenever query or currentPage changes.
    
    useEffect(() => {
        const fetchSearchedMovies = async () => {
            try {
                const data = await searchMovies(query, currentPage);
                setMovies(data.results || []); // Handle no results
                setTotalPages(data.total_pages || 1); // Default to 1 page
            } catch (error) {
                console.error("Error fetching searched movies:", error);
            }
        };
        fetchSearchedMovies();
    }, [query, currentPage]);

    
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div>
            <h1>Search Results for "{query}"</h1>
            <div>
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                    // A reusable component to display individual movie details.
                ))}
            </div>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            //A reusable component to handle pagination UI and functionality.
            />

        </div>
    );
};

export default SearchedMovies;
