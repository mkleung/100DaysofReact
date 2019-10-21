import React from "react";
import ReactDOM from "react-dom";
import Tetris from "./components/Tetris";
import "./styles.css";
import { removeRowFromMergeArray } from "./components/Helpers/Utils";

// let mergeArray = [
//   [18, 0],
//   [19, 0],
//   [19, 1],
//   [18, 2],
//   [18, 3],
//   [19, 2],
//   [19, 3],
//   [18, 4],
//   [19, 4],
//   [19, 5],
//   [18, 6],
//   [18, 7],
//   [19, 6],
//   [19, 7],
//   [18, 8],
//   [18, 9],
//   [19, 8],
//   [19, 9],
//   [17, 1],
//   [17, 0],
//   [17, 1],
//   [17, 1],
//   [17, 1],
//   [17, 1],
//   [17, 1],
//   [17, 1],
//   [17, 1],
//   [17, 1]
// ];

// let filtered = removeRowFromMergeArray(mergeArray);
// console.log(filtered);

function App() {
  return (
    <div className="App">
      <Tetris />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
