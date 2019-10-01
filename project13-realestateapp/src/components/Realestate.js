import React, { Component } from "react";
import Listings from "./listings";
import About from "./about";
import Nav from "./nav";
import Start from "./start";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "./realestate.scss";

// class component
class Realestate extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <main role="main">
          <Route
            render={({ location }) => (
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  classNames="fade"
                  timeout={450}
                >
                  <Switch location={location}>
                    <Route exact path="/" component={Start} />
                    <Route path="/about" component={About} />
                    <Route path="/listings" component={Listings} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
        </main>
      </Router>
    );
  }
}

export default Realestate;
