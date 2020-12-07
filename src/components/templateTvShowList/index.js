import React, { useState } from "react";
import Header from "../headerTVList";
import TvShowList from "../tvShowList";
import FilterControls from "../filterControls";

const TvListPageTemplate = ({ tvs, name, action }) => {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genre = Number(genreFilter)
  let displayedTvs = tvs
    .filter(t => {
      return t.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter(t => {
      return  genre > 0
        ? t.genre_ids.includes(Number(genreFilter))
        : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };

  return (
    <>
      <Header name={name} numTvs={displayedTvs.length} />
      <FilterControls onUserInput={handleChange} numTvs={displayedTvs.length}/>
      <TvShowList
      action={action}
      tvs={displayedTvs}
      ></TvShowList>
    </>
  );
};

export default TvListPageTemplate ;