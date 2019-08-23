import React from "react";
import ReactDOM from "react-dom";
import Counter from "./components/Counter";

import "./styles.css";

function App() {
  return (
    <div>
      <div className="container">
        <Counter />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
