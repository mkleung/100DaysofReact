import React, { useState, useContext, useRef } from "react";
import MoviesContext from "../context";
import "./addmovie.scss";
import Star from "./star";

const Addmovie = () => {
  const [ratings, setRatings] = useState("");
  // const [price, setPrice] = useState("");
  const [movies, setMovies] = useContext(MoviesContext);

  const nameRef = useRef();
  const priceRef = useRef();
  const yearRef = useRef();

  const lastMovieAdded = movies.slice(-1)[0];
  const onAddMovie = () => {
    nameRef.current.focus();
    let name = nameRef.current.value;
    let price = priceRef.current.value;
    let year = yearRef.current.value;

    if (name !== "" && price !== "" && year !== "") {
      setMovies(prevMovies => [
        ...prevMovies,
        {
          id: lastMovieAdded.id + 1,
          name: name,
          price: price,
          year: year,
          rating: ratings
        }
      ]);

      nameRef.current.value = "";
      priceRef.current.value = "";
      yearRef.current.value = "";
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
        default:
          nameRef.current.focus();
          break;
      }
    }
  };

  const change = e => {
    const val = e.target.value;
    setRatings(val);
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

        {/* Star Ratings */}
        <div className="rating">
          <input
            type="radio"
            className="rating-input"
            id="rating-input-1-5"
            name="rating"
            value="5"
            onChange={e => change(e)}
          />
          <label htmlFor="rating-input-1-5" className="rating-star">
            <Star />
          </label>

          <input
            type="radio"
            className="rating-input"
            id="rating-input-1-4"
            name="rating"
            value="4"
            onChange={e => change(e)}
          />
          <label htmlFor="rating-input-1-4" className="rating-star">
            <Star />
          </label>

          <input
            type="radio"
            className="rating-input"
            id="rating-input-1-3"
            name="rating"
            value="3"
            onChange={e => change(e)}
          />
          <label htmlFor="rating-input-1-3" className="rating-star">
            <Star />
          </label>
          <input
            type="radio"
            className="rating-input"
            id="rating-input-1-2"
            name="rating"
            value="2"
            onChange={e => change(e)}
          />
          <label htmlFor="rating-input-1-2" className="rating-star">
            <Star />
          </label>
          <input
            type="radio"
            className="rating-input"
            id="rating-input-1-1"
            name="rating"
            value="1"
            onChange={e => change(e)}
          />
          <label htmlFor="rating-input-1-1" className="rating-star">
            <Star />
          </label>
        </div>
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
