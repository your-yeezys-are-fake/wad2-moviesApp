import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMovieCredits } from "../../api/tmdb-api";
import { excerpt } from "../../util";

export default ({ movie }) => {
  const [crew, setCrew] = useState([]);

  useEffect(() => {
    getMovieCredits(movie.id).then(crew => {
      setCrew(crew.crew);
    });
  }, []);
  return (
   <div>
     <h3><b>Crew</b></h3>
     {crew.map(cr => {
       return(
         <div>
           {cr.name}
          </div>
       )
     })}
   </div>
  );
    };
