import React from "react";
import ReactDOM from "react-dom";
import Timer from "./components/Timer";

import "./styles.scss";

function App() {
  return (
    <div className="App">
      <div className="container">
        {" "}
        <Timer />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
