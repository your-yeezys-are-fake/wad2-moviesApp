import React, { useContext } from "react";
import TvListPageTemplate from '../components/templateTvShowList'
import {TvsContext} from '../contexts/tvsContext'
import AddToFavoritesButton from '../components/buttons/addToFavorites'

const TvListPage = () => {
  const context = useContext(TvsContext);
  const tvs = context.tvs.filter((t) => { 
    return !("favorite" in t);
  });

  return (
      <TvListPageTemplate
        name='No. TV Shows'
        tvs={tvs}
        action={(tv) => {
          return <AddToFavoritesButton tv={tv} /> 
        }}
      />
  );
};

export default TvListPage;