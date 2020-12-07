import React from "react";
import Movie from "../movieCard/";
import "./popularMovies.css";

const PopularMovies = ({movies, action})  => {
  const movieCards = movies.map(m => (
    <Movie key={m.id} movie={m} action={action} />
  ));
  return <div className="row movies bg-info">{movieCards}</div>;
};

export default PopularMovies;