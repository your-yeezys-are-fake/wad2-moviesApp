import React, {useContext} from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToFavoriteButton from "../components/buttons/addToFavorites";

const NowPlayingMoviesPage = () => {
  const context = useContext(MoviesContext);

  return (
      <PageTemplate 
        title='Now Playing'
        movies={context.now_playing}
        action={(movie) => {
          return <AddToFavoriteButton movie={movie} /> 
        }}
      />
  );
};

export default NowPlayingMoviesPage;