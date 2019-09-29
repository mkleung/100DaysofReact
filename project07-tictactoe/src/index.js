import React from "react";
import ReactDOM from "react-dom";
import Tictactoe from "./components/Tictactoe";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Tictactoe />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
