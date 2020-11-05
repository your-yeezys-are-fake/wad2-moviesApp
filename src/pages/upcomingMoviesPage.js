import React, { useState, useEffect } from "react";
import StubAPI from "../api/stubAPI";
import UpcomingMovieListPageTemplate from '../components/templateUpcomingMoviesPage'
import { getUpcomingMovies } from "../api/tmdb-api";

const UpcomingMoviePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getUpcomingMovies().then(movies => {
      setMovies(movies);
    });
  }, []);

  const addToFavorites = movieId => {
    setMovies(movies => {
      const index = movies.map(m => m.id).indexOf(movieId);
      StubAPI.add(movies[index]);
      let newMoviesState = [...movies]
      newMoviesState.splice(index, 1);
      return newMoviesState;
    });
  };

  return (
      <UpcomingMovieListPageTemplate
        title='Upcoming Movies'
        movies={movies}
        buttonHandler={addToFavorites}
      />
  );
};

export default UpcomingMoviePage;

