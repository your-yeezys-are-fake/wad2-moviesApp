import React, { useState } from "react";
import Header from "../headerTVList";
import TvShowList from "../tvShowList";
import FilterControls from "../filterControls";

const TvListPageTemplate = ({ tvs, name, action }) => {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genre = Number(genreFilter)
  let displayedTvs = tvs
    .filter(m => {
      return m.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
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
      <Header name={name} numMovies={displayedTvs.length} />
      <FilterControls onUserInput={handleChange} numMovies={displayedTvs.length}/>
      <TvShowList
      action={action}
      movies={displayedTvs}
      ></TvShowList>
    </>
  );
};

export default TvListPageTemplate ;