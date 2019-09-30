import React, { useContext } from "react";
import MoviesContext from "../context";
import Addmovie from "../addmovie";
import "./movielist.scss";

const MoviesListPage = () => {
  const [movies] = useContext(MoviesContext);
  return (
    <div className="content">
      <h2>Movies</h2>

      <table className="movies-table pure-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Price</th>
            <th>Year</th>
            <th>Rating</th>
          </tr>
        </thead>

        <tbody>
          {movies.map((movie, index) => {
            let oddRow = index % 2 === 0 ? "pure-table-odd" : "";
            return (
              <tr className={oddRow} key={index}>
                <td key={movie.id}>{movie.id}</td>
                <td>{movie.name}</td>
                <td>{movie.price}</td>
                <td>{movie.year}</td>
                <td>{movie.rating}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <hr />
      <Addmovie />
    </div>
  );
};

export default MoviesListPage;
