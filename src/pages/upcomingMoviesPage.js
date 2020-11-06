import React, {useContext} from "react";
import UpcomingMovieListPageTemplate from '../components/templateUpcomingMoviesPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToWatchlistButton from "../components/buttons/addToWatchlist"

const UpcomingMoviePage = () => {
  const context = useContext(MoviesContext);

  return (
      <UpcomingMovieListPageTemplate 
        title='Upcoming Movies'
        movies={context.movies}
        action={(movie) => {
          return <AddToWatchlistButton movie={movie} /> 
        }}
      />
  );
};



export default UpcomingMoviePage;


