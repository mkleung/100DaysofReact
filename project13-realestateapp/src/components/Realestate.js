import React, { Component } from "react";
import Home from "./home";
import About from "./about";
import Nav from "./nav";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "./realestate.scss";

// class component
class Realestate extends Component {
  render() {
    return (
      <Router>
        <Nav />

        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} classNames="fade" timeout={450}>
                <Switch location={location}>
                  <Route exact path="/" component={Home} />
                  <Route path="/about" component={About} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </Router>
    );
  }
}

export default Realestate;
