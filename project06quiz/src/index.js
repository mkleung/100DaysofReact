import React from "react";
import ReactDOM from "react-dom";
import Quiz from "./quiz";
import "./styles.scss";

function App() {
  return (
    <div className="App">
      <Quiz />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
