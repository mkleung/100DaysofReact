import React, { useState, useContext, useRef } from "react";
import MoviesContext from "../context";

const Addmovie = () => {
  // const [name, setName] = useState("");
  // const [price, setPrice] = useState("");
  const [movies, setMovies] = useContext(MoviesContext);

  const nameRef = useRef();
  const priceRef = useRef();
  const yearRef = useRef();
  const ratingRef = useRef();
  const lastMovieAdded = movies.slice(-1)[0];
  const onAddMovie = () => {
    nameRef.current.focus();
    let name = nameRef.current.value;
    let price = priceRef.current.value;
    let year = yearRef.current.value;
    let rating = ratingRef.current.value;
    if (name !== "" && price !== "" && year !== "" && rating !== "") {
      setMovies(prevMovies => [
        ...prevMovies,
        {
          id: lastMovieAdded.id + 1,
          name: name,
          price: price,
          year: year,
          rating: rating
        }
      ]);

      nameRef.current.value = "";
      priceRef.current.value = "";
      yearRef.current.value = "";
      ratingRef.current.value = "";
    }
  };

  const onKeyUp = (e, target) => {
    // if enter is pressed
    if (e.keyCode === 13) {
      switch (target) {
        case "name":
          priceRef.current.focus();
          break;
        case "price":
          yearRef.current.focus();
          break;
        case "year":
          ratingRef.current.focus();
          break;
        case "rating":
          nameRef.current.focus();
          break;
        default:
          nameRef.current.focus();
          break;
      }
    }
  };

  return (
    <div className="pure-form pure-form-stacked">
      <fieldset>
        <input
          className="pure-input-rounded"
          ref={nameRef}
          placeholder="Add Movie Title"
          type="text"
          onKeyUp={e => onKeyUp(e, "name")}
        />
        <input
          className="pure-input-rounded"
          ref={priceRef}
          placeholder="Add Movie Price"
          type="number"
          onKeyUp={e => onKeyUp(e, "price")}
        />
        <input
          className="pure-input-rounded"
          ref={yearRef}
          placeholder="Add Year Released"
          type="number"
          onKeyUp={e => onKeyUp(e, "year")}
        />

        <input
          className="pure-input-rounded"
          ref={ratingRef}
          placeholder="Add rating"
          type="number"
          onKeyUp={e => onKeyUp(e, "rating")}
        />

        <button
          className="pure-button pure-button-primary green-button"
          onClick={onAddMovie}
        >
          Add
        </button>
      </fieldset>
    </div>
  );
};

export default Addmovie;
