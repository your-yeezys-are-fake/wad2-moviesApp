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
import AddMovieReviewPage from './pages/addMovieReviewPage';
import TrendingMoviesPage from "../src/pages/trendingMoviesPage";
import NowPlayingMoviesPage from './pages/nowPlayingMoviesPage';
import PopularMoviesPage from './pages/popularMoviesPage';
import LoginPage from "./pages/loginPage";
import SignUpPage from "./pages/signUpPage";
import PrivateRoute from "./components/privateRoute";
import AuthHeader from "./components/authHeader";
import AuthProvider from "./contexts/authContext";

const App = () => {
  return (
    <BrowserRouter>
     <AuthProvider>
        <AuthHeader />
    <div className="jumbotron">
    <SiteHeader /> 
          <div className="container-fluid">
          <MoviesContextProvider>
          <GenresContextProvider>
        <Switch>
        <Route path="/movies/upcoming" component={UpcomingMoviePage} />  
        <Route path="/movies/now_playing" component={NowPlayingMoviesPage} />
        <Route path="/trending/movies/week" component={TrendingMoviesPage}/>
        <Route path= "/movies/popular" component={PopularMoviesPage}/>
        <Route path="/tv/latest" component= {tvShowPage} />
        <Route exact path="/reviews/form" component={AddMovieReviewPage} />  
          <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
          <Route path="/movies/:id" component={MoviePage} />
          <PrivateRoute path="/reviews/:id" component={MovieReviewPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignUpPage} />,
          <Route exact path="/" component={HomePage} />
          <Redirect from="*" to="/" />
        </Switch>
        </GenresContextProvider>
        </MoviesContextProvider>
      </div>
    </div>
    </AuthProvider>
  </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
