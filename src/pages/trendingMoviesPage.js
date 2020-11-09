import React, {useContext} from "react";
import TemplateTrendingMovie from '../components/templateTrendingMovie'
import {MoviesContext} from '../contexts/moviesContext'
import AddToFavoritesButton from '../components/buttons/addToFavorites'

const TrendingMoviesPage = () => {
  const context = useContext(MoviesContext);

  return (
      <TemplateTrendingMovie 
        title='Trending Movies'
        movies={context.now_playing}
        action={(movie) => {
          return <AddToFavoritesButton movie={movie} /> 
        }}
      />
  );
};

export default TrendingMoviesPage;