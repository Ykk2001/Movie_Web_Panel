import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MovieCard1 from "../components/MovieCard1";
import CastList from "../components/CastList";

const MovieDetail = () => {
    const { movieId } = useParams()
    const [movie, setMovie] = useState(null); // Holds movie details
    const [cast, setCast] = useState([]); // Holds cast information
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state

    const API_KEY = "c45a857c193f6302f2b5061c3b85e743";

    useEffect(() => {
        const fetchMovieData = async () => {
            try {
                setLoading(true);
                const movieResponse = await axios.get(
                    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
                );
                setMovie(movieResponse.data);

                const castResponse = await axios.get(
                    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
                );
                setCast(castResponse.data.cast);
            } catch (error) {
                setError("Failed to load movie details or cast information.");
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchMovieData();
    }, [movieId]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="movie-detail-page">
            <MovieCard1 movie={movie} />
            <CastList cast={cast} />
        </div>
    );
};

export default MovieDetail;





















// // src/pages/MovieDetail.js
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { fetchMovieDetail, fetchMovieCast } from '../utils/api';
// //import './MovieDetail.css';

// const MovieDetail = () => {
//     const { id } = useParams();//Extracts the id parameter from the URL.
//     const [movie, setMovie] = useState({});//Holds detailed information about the movie
//     const [cast, setCast] = useState([]);//This state will hold the list of cast members for the movie.

//     useEffect(() => {
//         const fetchDetail = async () => {
//             const movieData = await fetchMovieDetail(id);
//             setMovie(movieData);//etches detailed movie data (title, overview, release date, etc.)
//             const castData = await fetchMovieCast(id);//api call
//             setCast(castData.cast);
//         };
//         fetchDetail();
//     }, [id]);

//     return (
//         <div className="movie-detail">
//             <h1>{movie.title}</h1>
//             <p>{movie.overview}</p>
//             <h3>Cast:</h3>
//             <ul>
//                 {cast.map((actor) => (
//                     <li key={actor.id}>{actor.name}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default MovieDetail;





