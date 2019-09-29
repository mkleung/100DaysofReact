import React, { useState } from "react";
import Home from "./home";
import MoviesList from "./movieslist";
import Nav from "./nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MoviesProvider } from "./context";

const Movies = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      name: "Harry Potter",
      price: "10",
      year: "2004",
      rating: "1"
    },
    {
      id: 2,
      name: "Game of Thrones",
      price: "20",
      year: "2019",
      rating: "5"
    },
    {
      id: 3,
      name: "Breaking Bad",
      price: "15",
      year: "2012",
      rating: "3"
    }
  ]);

  return (
    <Router>
      <MoviesProvider value={[movies, setMovies]}>
        {/* <Home />
          <MoviesList />
          <Addmovie /> */}

        <Nav />

        <div className="pure-g">
          <div className="pure-u-1-3" />
          <div className="pure-u-1-3">
            <Route
              exact
              path="/"
              render={props => <Home location={props.location} {...props} />}
            />

            <Route
              path="/movies"
              render={props => (
                <MoviesList location={props.location} {...props} />
              )}
            />
          </div>
          <div className="pure-u-1-3" />
        </div>
      </MoviesProvider>
    </Router>
  );
};

export default Movies;
