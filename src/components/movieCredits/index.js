import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMovieCredits } from "../../api/tmdb-api";
import { excerpt } from "../../util";

export default ({ movie }) => {
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    getMovieCredits(movie.id).then(credits => {
      setCredits(credits);
    });
  }, []);
  return (
    <table className="table table-striped table-bordered table-hover">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Character</th>
          <th scope="col">More</th>
        </tr>
      </thead>
      <tbody>
        {credits.map(c => {
            return (
              <tr key={c.id}>
                <td>{c.name}</td>
                <td>{excerpt(c.character)}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};