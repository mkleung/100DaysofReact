import React, { useState } from "react";
import Card from "../card";
import { CSSTransition } from "react-transition-group";
import data from "../../data/data";
import "./listings.scss";

const Listings = () => {
  const [appearHome, setAppearHome] = useState(true);
  const [property, setProperty] = useState(data.properties[0]);

  const toggleAppear = () => {
    setAppearHome(!appearHome);
  };

  const nextProperty = () => {
    const newIndex = property.index + 1;
    setProperty(data.properties[newIndex]);
  };

  const prevProperty = () => {
    const newIndex = property.index - 1;
    setProperty(data.properties[newIndex]);
  };

  return (
    <div className="page">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="buttons text-center">
              <button
                className="left"
                onClick={() => prevProperty()}
                disabled={property.index === 0}
              >
                Prev
              </button>
              <button
                className="right"
                onClick={() => nextProperty()}
                disabled={property.index === data.properties.length - 1}
              >
                Next
              </button>
            </div>
          </div>

          <div className="col-md-6 offset-md-3">
            <div className="card-wrapper">
              <CSSTransition
                in={appearHome}
                appear={true}
                timeout={300}
                classNames="fade"
              >
                <Card property={property} />
              </CSSTransition>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listings;
