import React, { useEffect, createContext, useReducer } from "react";
import { getMovies, getUpcomingMovies, getTrendingMovies, getNowPlayingMovies } from "../api/tmdb-api";

export const MoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-favorite":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true } : m
        ),
        upcoming: [...state.upcoming],
        now_playing: [...state.now_playing],
      };
    case "add-watchlist":
      return{
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: false } : m
        ),
        now_playing: [...state.now_playing], 
        upcoming: [...state.upcoming],       
      };
      case "load-upcoming":
        return { upcoming: action.payload.movies, movies: [...state.movies] };
        case "load-now-playing":
          return { now_playing: action.payload.movies, movies: [...state.movies] };
    case "load":
      return { movies: action.payload.movies, now_playing:[...state.now_playing], upcoming: [...state.upcoming]};
    case "add-review":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id
            ? { ...m, review: action.payload.review }
            : m
        ),
        now_playing: [...state.now_playing],
        upcoming: [...state.upcoming],
      };
    default:
      return state;
  }
};

const MoviesContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { movies: [], upcoming: [], now_playing: [] });

  const addToFavorites = (movieId) => {
    const index = state.movies.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-favorite", payload: { movie: state.movies[index] } });
  };

  const addToWatchlist = (movieId) => {
    const index = state.movies.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-watchlist", payload: { movie: state.movies[index] } });
  };

  const addReview = (movie, review) => {
    dispatch({ type: "add-review", payload: { movie, review } });
  };

  useEffect(() => {
    getMovies().then((movies) => {
      dispatch({ type: "load", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getUpcomingMovies().then((movies) => {
      dispatch({ type: "load-upcoming", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getNowPlayingMovies().then((movies) => {
      dispatch({ type: "load-now-playing", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getTrendingMovies().then((movies) => {
      dispatch({ type: "load-trending", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        upcoming: state.upcoming,
        now_playing: state.now_playing,
        addToFavorites: addToFavorites,
        addReview: addReview,
        addToWatchlist: addToWatchlist,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};


export default MoviesContextProvider;