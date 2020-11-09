import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../globals/fontawesome";

const TvHeader = ({ tv }) => {
  return (
    <div className="row">
      <div className="col-6 offset-3">
        <h2>
          {tv.name}
          {"  "}
          <a href={movie.homepage}>
            <FontAwesomeIcon icon={["fas", "home"]} size="1x" />
          </a>
        </h2>
      </div>
    </div>
  );
};

export default TvHeader;