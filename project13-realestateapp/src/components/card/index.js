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
        <div id={`card-${index}`} className="card">
          <div className="uk-card uk-card-default">
            <div className="uk-card-media-top">
              <img src={picture} alt={city} />
            </div>
            <div className="uk-card-body">
              <span className="index">{index + 1}</span>
              <p className="uk-card-title">
                {city}
                <br />
                {address}
              </p>
              <ul className="features">
                <li className="icon-bed">
                  {bedrooms} <span>bedrooms</span>
                </li>
                <li className="icon-bath">
                  {bathrooms} <span>bathrooms</span>
                </li>
                <li className="icon-car">
                  {carSpaces} <span>parking spots</span>
                </li>
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
