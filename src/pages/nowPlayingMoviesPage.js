import React, {useContext} from "react";
import NowPlayingMoviesTemplate from '../components/templateNowPlayingMovies'
import {MoviesContext} from '../contexts/moviesContext'
import AddToFavoriteButton from "../components/buttons/addToFavorites";

const NowPlayingMoviesPage = () => {
  const context = useContext(MoviesContext);

  return (
      <NowPlayingMoviesTemplate 
        title='Upcoming Movies'
        movies={context.movies}
        action={(movie) => {
          return <AddToFavoriteButton movie={movie} /> 
        }}
      />
  );
};

export default NowPlayingMoviesPage;