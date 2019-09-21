import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Plants from "./components/plants";

function App() {
  return <Plants />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
