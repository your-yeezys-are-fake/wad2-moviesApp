import "./tvPage.css";
import React from "react";
import TvHeader from '../headerTV'

const TemplateTVPage = ({ tv, children }) => {
  return (
    <>
      <TvHeader tv={tv} />
      <div className="row">
        <div className="col-3">
          <img
            src={
              movie.poster_path
            ?`https://image.tmdb.org/t/p/w500/${tv.poster_path}`
            :"./film-poster-placeholder.png"
            }
            className="tv"
            alt={tv.name}
          />
        </div>
        <div className="col-9">{children}</div>
      </div>
    </>
  );};

 export default TemplateTVPage;