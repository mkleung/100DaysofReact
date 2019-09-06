import React from "react";
import ReactDOM from "react-dom";
import Snake from "./components/Snake";
import "./styles.scss";

function App() {
  return (
    <div className="App">
      <Snake />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
