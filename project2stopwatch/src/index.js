import React from "react";
import ReactDOM from "react-dom";
import { Jumbotron, Col, Button } from "react-bootstrap";
import Timer from "./components/Timer";
import ButtonItem from "./components/Button";
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Jumbotron>
        <h1>100 Days of React - Day 2 - Timer!</h1>
      </Jumbotron>
      <div className="container">
        <div className="row">
          <div className="col-6 text-left">
            {" "}
            <Timer />
          </div>
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
