import React from "react";
import Home from "./home";
import Login from "./login";
import Nav from "./nav";
import Profile from "./profile";
import Register from "./register";
import Admin from "./admin";
import "./plants.scss";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

const auth = {
  users: [
    { id: 1, email: "test@test.com", password: "test" },
    { id: 2, email: "test1@test.com", password: "test" }
  ],
  isAuthenticated: false,
  userAuthenticated: null,
  addUser(email, password) {
    let users = this.users;
    let lastUser = users[users.length - 1];
    users.push({ id: lastUser.id + 1, email: email, password: password });
  },
  login(id) {
    this.isAuthenticated = true;
    this.userAuthenticated = id;
  },
  logout() {
    this.isAuthenticated = false;
    this.userAuthenticated = null;
  }
};

class Plants extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "test"
    };
  }

  changePage = page => {
    this.setState({
      page: page
    });
  };
  addUser = (email, password) => {
    auth.addUser(email, password);
  };
  loginUser = id => {
    auth.login(id);
  };

  logoutUser = () => {
    auth.logout();
  };

  render() {
    return (
      <Router>
        <div>
          <Nav changePage={this.changePage} />

          <Route
            exact
            path="/"
            render={props => (
              <Home
                location={props.location}
                isAuthenticated={auth.isAuthenticated}
                {...props}
              />
            )}
          />

          <Route
            path="/login"
            render={props => (
              <Login
                location={props.location}
                loginUser={this.loginUser}
                page={this.state.page}
                users={auth.users}
                {...props}
              />
            )}
          />

          {/* PROFILE */}
          <Route
            path="/profile"
            render={props =>
              auth.isAuthenticated === true ? (
                <Profile
                  location={props.location}
                  logoutUser={this.logoutUser}
                  id={auth.userAuthenticated}
                  users={auth.users}
                  {...props}
                />
              ) : (
                <Redirect to="/login" />
              )
            }
          />

          {/* REGISTER */}
          <Route
            path="/register"
            render={props => (
              <Register
                location={props.location}
                addUser={auth.addUser}
                users={auth.users}
                {...props}
              />
            )}
          />

          {/* Admin */}
          <Route
            path="/admin"
            render={props =>
              auth.isAuthenticated === true ? (
                <Admin
                  location={props.location}
                  logoutUser={this.logoutUser}
                  users={auth.users}
                  {...props}
                />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
        </div>
      </Router>
    );
  }
}

export default Plants;
