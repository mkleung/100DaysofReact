import React from "react";
import PropTypes from "prop-types";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./card.scss";
const Card = ({ property }) => {
  const {
    index,
    picture,
    city,
    address,
    bedrooms,
    bathrooms,
    carSpaces
  } = property;
  return (
    <TransitionGroup>
      <CSSTransition timeout={450} classNames="fade" key={property._id}>
        <div className="card">
          <img className="card-img-top" src={picture} alt={index} />
          <div className="card-body">
            <h5 className="card-title">
              {address}, {city}
            </h5>
            <div className="card-text">

              <ul>
                <li>{bedrooms} bedrooms</li>
                <li>{bathrooms} bathrooms</li>
                <li>{carSpaces} car spaces</li>
              </ul>
            </div>
          </div>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

Card.propTypes = {
  property: PropTypes.object.isRequired
};

export default Card;
