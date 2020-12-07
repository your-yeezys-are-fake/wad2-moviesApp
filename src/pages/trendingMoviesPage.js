import React, {useContext} from "react";
import MovieListPageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToFavoritesButton from '../components/buttons/addToFavorites'

const TrendingMoviesPage = () => {
  const context = useContext(MoviesContext);

  return (
      <MovieListPageTemplate
        title='Trending Movies'
        movies={context.trending}
        action={(movie) => {
          return <AddToFavoritesButton movie={movie} /> 
        }}
      />
  );
};

export default TrendingMoviesPage;