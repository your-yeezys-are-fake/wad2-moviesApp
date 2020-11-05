import React, {useContext} from "react";
import UpcomingMovieListPageTemplate from '../components/templateUpcomingMoviesPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToFavoritesButton from "../components/buttons/addToFavorites"

const UpcomingMoviePage = () => {
  const context = useContext(MoviesContext);
  const favorites = context.movies.filter( m => m.favorite )
  return (
    <UpcomingMovieListPageTemplate
      movies={favorites}
      title={"Upcoming Movies"}
      action={movie => <AddToFavoritesButton movie={movie} />}
    />
  );
};

export default UpcomingMoviePage;


