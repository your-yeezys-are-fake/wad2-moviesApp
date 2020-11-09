import React, { useEffect, createContext, useReducer } from "react";
import {getTVShows} from "../api/tmdb-api";

export const TvsContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-favorite":
      return {
        tvs: state.tvs.map((t) =>
          t.id === action.payload.tv.id ? { ...t, favorite: true } : t
        ),
      };
    case "load":
      return { tvs: action.payload.tvs};
    default:
      return state;
  }
};

const TvsContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { tvs: [] });

  const addToFavorites = (tvId) => {
    const index = state.tvs.map((t) => t.id).indexOf(tvId);
    dispatch({ type: "add-favorite", payload: { tv: state.tvs[index] } });
  };

  useEffect(() => {
    getTVShows().then((tvs) => {
      dispatch({ type: "load", payload: { tvs } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TvsContext.Provider
      value={{
        tvs: state.tvs,
        addToFavorites: addToFavorites,
      }}
    >
      {props.children}
    </TvsContext.Provider>
  );
};


export default TvsContextProvider;