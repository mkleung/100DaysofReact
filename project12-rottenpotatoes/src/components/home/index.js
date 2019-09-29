import React from "react";
import "./home.scss";
import { Link } from "react-router-dom";
const imgStyle = {
  width: 400,
  height: 400
};

const HomePage = () => {
  return (
    <div className="banner">
      <img style={imgStyle} src="./potato.png" alt="potato" />
      <div>
        <h1 className="banner-head">Rotten Potatoes</h1>
        <p>Movie Review Index</p>
        <Link
          className="pure-button pure-button-primary green-button "
          to="/movies"
        >
          View Movies
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
