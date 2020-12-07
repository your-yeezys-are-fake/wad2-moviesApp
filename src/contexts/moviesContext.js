import React, { useEffect, createContext, useReducer } from "react";
import { getMovies, getUpcomingMovies, getTrendingMovies, getNowPlayingMovies, getPopularMovies} from "../api/tmdb-api";

export const MoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-favorite":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true } : m
        ),
        now_playing: state.now_playing.map((n) => 
        n.id === action.payload.movie.id ? {...n, favourite: true} : n
        ),
        trending: state.trending.map((t) => 
        t.id === action.payload.movie.id ? {...t, favourite:true} : t
        ),
        popular: state.popular.map((p) =>
        p.id === action.payload.movie.id ? {...p, favorite: true} : p
        ),
        upcoming: [...state.upcoming]
      };
    case "add-watchlist":
      return{
        upcoming: state.upcoming.map((m) =>
          m.id === action.payload.movie.id ? { ...m, watchlist: true } : m
        ),
        movies:[...state.movies],
        popular:[...state.popular],
        trending: [...state.trending],
        now_playing:[...state.now_playing]
        
            
      };
      case "load":
      return { movies: action.payload.movies, upcoming:[...state.upcoming], popular:[...state.popular], trending:[...state.trending], now_playing:[...state.now_playing]};
      case "load-upcoming":
        return { upcoming: action.payload.movies, movies: [...state.movies], popular:[...state.popular],  trending:[...state.trending], now_playing:[...state.now_playing]};
      case "load-now-playing":
          return { now_playing: action.payload.movies, upcoming:[...state.upcoming], movies:[...state.movies], popular:[...state.popular], trending:[...state.trending]};
      case "load-trending":
          return {trending: action.payload.movies, upcoming:[...state.upcoming], movies:[...state.movies], popular:[...state.popular], now_playing:[...state.now_playing]} ;  
      case "load-popular":
          return {popular: action.payload.movies, upcoming:[...state.upcoming], movies:[...state.movies], now_playing:[...state.now_playing], trending:[...state.trending] }  ;   
    case "add-review":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id
            ? { ...m, review: action.payload.review }
            : m
        ),
        upcoming: [...state.upcoming],
        now_playing: [...state.now_playing],
        trending: [...state.trending],
        popular: [...state.popular]
      };
    default:
      return state;
  }
};

const MoviesContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { movies: [], upcoming: [], now_playing: [], trending: [], popular:[] });

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

  useEffect(() => {
    getPopularMovies().then((movies) => {
      dispatch({ type: "load-popular", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        upcoming: state.upcoming,
        now_playing: state.now_playing,
        trending: state.trending,
        popular: state.popular,
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