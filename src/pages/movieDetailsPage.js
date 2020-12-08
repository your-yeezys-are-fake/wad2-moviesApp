import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
import MovieReviews from "../components/movieReviews";
import MovieCredits from "../components/movieCredits";
import useMovie from "../hooks/useMovie";



const MoviePage = props => {
  const {id} = props.match.params;
  const [movie] = useMovie(id)
    return (
      <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            <MovieDetails movie={movie} />
          </PageTemplate>
          <div className="row">
            <div className="col-12 ">
              {!props.history.location.pathname.endsWith("/reviews") ? (
                <Link
                  className="btn btn-primary btn-block active"
                  to={`/movies/${id}/reviews`}
                >
                  Show Reviews (Extracts)
                </Link>
              ):(
                <Link
                  className="btn btn-primary btn-block active"
                  to={`/movies/${id}`}
                >
                Hide Reviews 
                </Link>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-12 ">
              {!props.history.location.pathname.endsWith("/credits") ? (
                <Link
                  className="btn btn-primary btn-block active"
                  to={`/movies/${id}/credits`}
                >
                  Show Credits
                </Link>
              ):(
                <Link
                  className="btn btn-primary btn-block active"
                  to={`/movies/${id}`}
                >
                Hide Credits 
                </Link>
              )}
            </div>
          </div>
          <Route
            path={`/movies/:id/credits`}
            render={props => <MovieCredits movie={movie} {...props} />}
          />
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
    );
      }
    export default withRouter(MoviePage);