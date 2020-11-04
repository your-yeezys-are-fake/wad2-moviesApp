import React, { useState } from "react";
import Header from "../headerMovieList";
import UpcomingMovies from "../upcomingMoviesPage";
import FilterControls from "../filterControls";

const UpcomingMovieListPageTemplate = ({movies, title, buttonHandler}) => {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genre = Number(genreFilter)
  let displayedMovies = movies
    .filter(m => {
      return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter(m => {
      return  genre > 0
        ? m.genre_ids.includes(Number(genreFilter))
        : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };

  return (
    <>
      <Header title={title} numMovies={displayedMovies.length} />
      <FilterControls onUserInput={handleChange} numMovies={displayedMovies.length}/>
      <UpcomingMovies
        buttonHandler={buttonHandler}
        movies={displayedMovies}
      ></UpcomingMovies>
    </>
  );
};

export default UpcomingMovieListPageTemplate ;