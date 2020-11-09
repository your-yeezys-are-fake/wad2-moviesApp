import React from "react";
import Tv from "../tvCard/";
import "./tvShowList.css";

const TvShowList = ({tvs, action}) => {
  const tvCards = tvs.map(t => (
    <Tv key={t.id} tv={t} action={action} />
  ));
  return <div className="row tv bg-info">{tvCards}</div>;
};

export default TvShowList;