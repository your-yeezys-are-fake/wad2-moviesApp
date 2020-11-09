import React from "react";
import {withRouter } from "react-router-dom";
import TvDetails from "../components/tvShowDetails";
import TemplateTVPage from "../components/templateTvShow";
//import MovieReviews from "../components/movieReviews";
import useTv from "../hooks/useTv";



const TvPage = props => {
  const {id} = props.match.params;
  const [tv] = useTv(id)
    return (
      <>
      {tv ? (
        <>
          <TemplateTVPage tv={tv}>
            <TvDetails tv={tv} />
          </TemplateTVPage>
          <div className="row">
            <div className="col-12 ">
            </div>
          </div>
        </>
      ) : (
        <p>Waiting for tv show details</p>
      )}
    </>
    );
      }
    export default withRouter(TvPage);