import React from "react";
import { Link } from "react-router-dom";
import "./nav.scss";

class Nav extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li
              className="nav-item"
              onClick={() => this.props.changePage("profile")}
            >
              <Link className="nav-link" to="/profile">
                User Profile (hidden)
              </Link>
            </li>
            <li
              className="nav-item"
              onClick={() => this.props.changePage("admin")}
            >
              <Link className="nav-link" to="/admin">
                Admin (hidden)
              </Link>
            </li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}
export default Nav;
