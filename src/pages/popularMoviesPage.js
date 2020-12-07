import React, {useContext} from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToFavoritesButton from '../components/buttons/addToFavorites'

const PopularMoviesPage = () => {
  const context = useContext(MoviesContext);

  return (
      <PageTemplate
        title='Popular Movies'
        movies={context.popular}
        action={(movie) => {
          return <AddToFavoritesButton movie={movie} /> 
        }}
      />
  );
};

export default PopularMoviesPage;