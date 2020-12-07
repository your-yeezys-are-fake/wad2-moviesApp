import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage';
import tvShowPage from './pages/tvShowPage';
import FavoriteMoviesPage from './pages/favoriteMoviesPage';
import MovieReviewPage from "./pages/movieReviewPage";
import UpcomingMoviePage from "./pages/upcomingMoviesPage";
import SiteHeader from './components/siteHeader';
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import TvsContextProvider from "./contexts/tvsContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import TrendingMoviesPage from "../src/pages/trendingMoviesPage";
import NowPlayingMoviesPage from './pages/nowPlayingMoviesPage';


const App = () => {
  return (
    <BrowserRouter>
    <div className="jumbotron">
    <SiteHeader /> 
          <div className="container-fluid">
          <MoviesContextProvider>
          <TvsContextProvider>
          <GenresContextProvider>
        <Switch>
        <Route path="/movies/now_playing" component={NowPlayingMoviesPage} />
        <Route path="/movies/upcoming" component={UpcomingMoviePage} />
        <Route path="/tv/latest" component= {tvShowPage} />
        <Route exact path="/trending/movies/week" component={TrendingMoviesPage}/>
        <Route exact path="/reviews/form" component={AddMovieReviewPage} />  
          <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
          <Route path="/movies/:id" component={MoviePage} />
          <Route path="/reviews/:id" component={MovieReviewPage} />
          <Route path="/" component={HomePage} />
          <Redirect from="*" to="/" />
        </Switch>
        </GenresContextProvider>
        </TvsContextProvider>
        </MoviesContextProvider>
      </div>
    </div>
  </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
