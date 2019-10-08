import React from "react";
import ReactDOM from "react-dom";
import Flashcard from "./components/Flashcard";
import Giphy from "./components/Giphy";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Giphy />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
