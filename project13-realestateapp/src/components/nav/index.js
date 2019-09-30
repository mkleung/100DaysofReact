import React from "react";
import "./nav.scss";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <NavLink className="navbar-brand" exact to="/" activeClassName="active">
        Home
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExampleDefault"
        aria-controls="navbarsExampleDefault"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink
              className="nav-link"
              exact
              to="/about"
              activeClassName="active"
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              exact
              to="/listings"
              activeClassName="active"
            >
              Listings
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
