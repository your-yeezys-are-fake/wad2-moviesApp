import React, {useContext} from "react";
import UpcomingMovieListPageTemplate from '../components/templateUpcomingMoviesPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToFavoritesButton from '../components/buttons/addToFavorites'
//import AddToWatchlistButton from "../components/buttons/addToWatchlist"

const UpcomingMoviePage = () => {
  const context = useContext(MoviesContext);

  return (
      <UpcomingMovieListPageTemplate 
        title='Upcoming Movies'
        movies={context.movies}
        action={(movie) => {
          return <AddToFavoritesButton movie={movie} /> 
        }}
      />
  );
};



export default UpcomingMoviePage;


