import React from "react";
import ReactDOM from "react-dom";
import Realestate from "./components/Realestate";
import "./styles.css";

function App() {
  return <Realestate />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
