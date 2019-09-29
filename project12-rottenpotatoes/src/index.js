import React from "react";
import ReactDOM from "react-dom";
import Movies from "./components/Movies";
import "./styles.scss";

// https://css-tricks.com/intro-firebase-react/

function App() {
  return <Movies />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
