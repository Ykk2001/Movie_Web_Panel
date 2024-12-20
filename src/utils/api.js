
// src/utils/api.js
import axios from 'axios';

const API_KEY = 'c45a857c193f6302f2b5061c3b85e743';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async (category, page = 1) => {
  const { data } = await axios.get(`${BASE_URL}/movie/${category}`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
      page,
    },
  });
  return data;
};//fetchMovies: Fetches a list of movies for a given category and page.

export const fetchMovieDetail = async (movieId) => {
  const { data } = await axios.get(`${BASE_URL}/movie/${movieId}`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });
  return data;
};//fetchMovieDetail: Fetches detailed information about a specific movie using its ID.

export const searchMovies = async (query, page = 1) => {
  const { data } = await axios.get(`${BASE_URL}/search/movie`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
      query,
      page,
    },
  });
  return data;
};//This is an asynchronous function that takes two parameters:query: The search keyword or phrase for finding movies.page = 1: The page number for paginated search results (default is 1).
//earchMovies: Fetches movies that match a search query.
//The API key used to authenticate the request. TMDB requires this key to ensure the request is from an authorized user.

export const fetchMovieCast = async (movieId) => {
  const { data } = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });
  return data;
};
