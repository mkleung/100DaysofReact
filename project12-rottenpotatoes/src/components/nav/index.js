import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.scss";

var navliStyle = {
  padding: 30,
  color: "#FFF"
};

var navStyle = {
  backgroundColor: "#E1B07E"
};

const Nav = () => {
  return (
    <div style={navStyle} className="pure-menu pure-menu-horizontal">
      <NavLink
        exact={true}
        activeClassName="active"
        style={navliStyle}
        className="pure-menu-heading pure-menu-link"
        to="/"
      >
        Rotten Potatoes
      </NavLink>

      <NavLink
        activeClassName="active"
        style={navliStyle}
        className="pure-menu-heading pure-menu-link"
        to="/movies"
      >
        Movies
      </NavLink>
    </div>
  );
};

export default Nav;
