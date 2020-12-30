export const getMovies = () => {
  return fetch(
     '/api/movies'//,{headers: {
       //'Authorization': window.localStorage.getItem('token')
    //}
  //}
  ).then(res => res.json());
};
  
  export const getMovie = id => {
    return fetch(
      `/api/movies/${id}`
    ).then(res => res.json());
  };

  
  export const getGenres = () => {
    return fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
        process.env.REACT_APP_TMDB_KEY +
        "&language=en-US"
    )
      .then(res => res.json())
      .then(json => json.genres);
  };

  export const getMovieReviews = id => {
    return fetch(`/api/movies/${id}/reviews`)
      .then(res => res.json());
  };

  export const getUpcomingMovies = () => {
    return fetch(
      '/api/movies/upcoming')
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getTrendingMovies = id => {
    return fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1`
    )
      .then(res => res.json())
      .then(json => json.results);
  }; 

   export const getTVShows = () => {
     return fetch(
      `https://api.themoviedb.org/3/tv/latest?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false`
     )
   };

   export const getTVShow = id => {
    return fetch(
      `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then(res => res.json());
   }

   export const getNowPlayingMovies = () => {
    return fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getPopularMovies = () => {
    return fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getMovieCredits = id => {
    return fetch(
      `/api/movies/${id}/credits`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const login = (username, password) => {
    return fetch('/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

export const signup = (username, password) => {
    return fetch('/api/users?action=register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

 