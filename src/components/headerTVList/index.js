import React from "react";

const Header = ({ title, numTvs }) => {
  return (
    <div className="row">
      <div className="col-md-6 offset-4">
        <h2>
          {`${title}  `}
          <span className="badge badge-pill badge-success">{numTvs}</span>
        </h2>
      </div>
    </div>
  );
};

export default Header;