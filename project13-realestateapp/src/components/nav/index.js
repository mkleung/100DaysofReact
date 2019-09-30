import React from "react";
import "./nav.scss";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="header">
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
