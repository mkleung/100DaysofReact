import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Counter from "./components/Counter";

import "./styles.css";

function App() {
  return (
    <div>
      <div className="jumbotron">
        <h1>100 Days of React Day 1 - Counter</h1>
      </div>
      <div className="container">
        <Counter />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
