import React from "react";
import ReactDOM from "react-dom";
import Ottawamap from "./components/Ottawamap";

import "./styles.scss";

function App() {
  return (
    <div className="App">
      <Ottawamap />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
