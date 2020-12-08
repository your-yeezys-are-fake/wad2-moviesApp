const [cast, setCast] = useState([]);
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMovieCredits } from "../../api/tmdb-api";
import { excerpt } from "../../util";

export default ({ movie }) => {
  useEffect(() => {
    getMovieCredits(movie.id).then(cast => {
      setCast(cast.cast);
    });
  }, []);
  return (
   <div>
     <h3><b>Cast</b></h3>
     {cast.map(ca => {
       return(
         <div>
           {ca.name}
           {ca.character}
          </div>
       )
     })}
   </div>
  );
};