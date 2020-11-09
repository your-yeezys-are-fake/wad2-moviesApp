import React from "react";
import "./tvDetails.css";

export default ({ tv }) => {
  return (
    <>
      <h4>Overview</h4>
      <p>{tv.overview}</p>
      <ul className="list-group list-group-horizontal">
        <li key="ruh" className="list-group-item list-group-item-dark">
          Seasons:
        </li>
        <li key="rut" className="list-group-item ">
          {tv.number_of_seasons}
        </li>
        <li key="rdh" className="list-group-item list-group-item-dark">
          First Episode Date:
        </li>
        <li key="rdv" className="list-group-item ">
          {tv.first_air_date}
        </li>
      </ul>

      <ul className="list-group list-group-horizontal">
        <li key="gh" className="list-group-item list-group-item-dark">
          Genres
        </li>
        {tv.genres.map(g => (
          <li key={g.name} className="list-group-item">
            {g.name}
          </li>
        ))}
      </ul>
      <ul className="list-group list-group-horizontal">
        <li key="slh" className="list-group-item list-group-item-dark">
          Spoken Languages
        </li>
        {tv.languages.map(lang => (
          <li key={lang.name} className="list-group-item">
            {lang.name}
          </li>
        ))}
      </ul>
    </>
  );
};