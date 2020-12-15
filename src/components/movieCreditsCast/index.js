import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMovieCredits } from "../../api/tmdb-api";
import { excerpt } from "../../util";


export default ({ movie }) => {
const [cast, setCast] = useState([]);
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
           <b>{ca.name + " as "}</b>
           {ca.character}
          </div>
       )
     })}
   </div>
  );
};