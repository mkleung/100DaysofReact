import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { StyledTetrisWrapper } from "./Styles";
import { PanelStyle, CellStyle } from "./Styles";
import { createGrids } from "./Helpers/Grids";
import { shapes, random } from "./Helpers/Shapes";
import { searchArray } from "./Helpers/Utils";
import { useInterval } from "./Helpers/useInterval";
import Nav from "./Nav";

const Tetris = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 5 },
    shapes: random(),
    collidedLeft: false,
    collidedRight: false,
    collidedBottom: false
  });
  const [droptime, setDroptime] = useState(200);
  const [gameOn, setGameOn] = useState(false);
  const [grids, setGrids] = useState(createGrids());
  const [mergeArray, setMerge] = useState([]);

  const updatePlayerPos = ({ x, y }) => {
    setPlayer(prev => ({
      ...prev,
      pos: {
        x: (prev.pos.x += x),
        y: (prev.pos.y += y)
      }
    }));
  };

  const moveOnKeyStroke = ({ keyCode }) => {
    let direction = "";
    if (keyCode === 37) {
      direction = "left";
    } else if (keyCode === 39) {
      direction = "right";
    }
    movePlayer(direction);
  };

  const movePlayer = direction => {
    let collidedLeft = false;
    if (player.pos.y <= 1) {
      collidedLeft = true;
    } else {
      collidedLeft = false;
    }

    let collidedRight = false;
    if (player.pos.y >= 9) {
      collidedRight = true;
    } else {
      collidedRight = false;
    }

    setPlayer(prev => ({
      ...prev,
      collidedLeft: collidedLeft,
      collidedRight: collidedRight
    }));

    if (direction === "left") {
      if (!player.collidedLeft) {
        updatePlayerPos({ x: 0, y: -1 });
      }
    } else if (direction === "right") {
      if (!player.collidedRight) {
        updatePlayerPos({ x: 0, y: 1 });
      }
    }
  };

  const drop = () => {
    if (player.pos.x === 18 || searchArray(mergeArray, player)) {
      let merge = [];
      for (let i = 0; i < player.shapes.correct.length; i++) {
        let correct = player.shapes.correct[i];
        merge.push([player.pos.x + correct[0], player.pos.y + correct[1]]);
      }
      setMerge(array => [...array, ...merge]);

      setPlayer(prev => ({
        ...prev,
        pos: {
          x: (prev.pos.x = 0),
          y: (prev.pos.y = 5)
        },
        shapes: random(),
        collidedBottom: true
      }));
    } else {
      updatePlayerPos({ x: 1, y: 0 });
    }
  };

  const startGame = () => {
    setGameOn(true);
  };

  const stopGame = () => {
    setGameOn(false);
  };

  useInterval(() => {
    if (gameOn) {
      drop();
    }
    //drop();
  }, droptime);

  // ComponentDidMount
  useEffect(() => {
    setPlayer(prev => ({
      ...prev,
      s: random()
    }));
  }, []);

  const rotateShape = () => {
    if (player.shapes.id === "L") {
      setPlayer(prev => ({
        ...prev,
        shapes: shapes[1]
      }));
    }

    if (player.shapes.id === "J") {
      setPlayer(prev => ({
        ...prev,
        shapes: shapes[2]
      }));
    }

    // setPlayer(prev => ({
    //   ...prev,
    //   shapes:
    // }));
  };
  return (
    <StyledTetrisWrapper
      role="button"
      tabIndex="0"
      onKeyDown={e => moveOnKeyStroke(e)}
    >
      <Nav />

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <PanelStyle>
              {grids.map((row, i) =>
                row.map((item, j) => {
                  let draw = false;
                  for (let k = 0; k < player.shapes.correct.length; k++) {
                    let item = player.shapes.correct[k];
                    if (
                      item[0] === i - player.pos.x &&
                      item[1] === j - player.pos.y
                    ) {
                      draw = true;
                    }
                  }

                  for (let k = 0; k < mergeArray.length; k++) {
                    let item = mergeArray[k];
                    if (item[0] === i && item[1] === j) {
                      draw = true;
                    }
                  }

                  return (
                    <CellStyle color={draw ? "red" : ""} key={j}>
                      {/* {j} */}
                    </CellStyle>
                  );
                })
              )}
            </PanelStyle>
          </div>
          <div className="col-md-6 pt-5">
            <div className="row pt-5">
              <div className="col-md-6">
                Game on: {gameOn.toString()}
                <br />
                {player.pos.x} , {player.pos.y}
                <br />
                left: {player.collidedLeft.toString()} / right:{" "}
                {player.collidedRight.toString()} / Bottom:{" "}
                {player.collidedBottom.toString()}
                <br />
              </div>
              <div className="col-md-6" />
              <div className="col-md-6 mt-5">
                {!gameOn && (
                  <button
                    type="button"
                    className="btn btn-success  btn-block"
                    onClick={startGame}
                  >
                    Start
                  </button>
                )}
                {gameOn && (
                  <button
                    type="button"
                    className="btn btn-warning btn-block"
                    onClick={stopGame}
                  >
                    Stop
                  </button>
                )}
                <br />
              </div>
              <div className="col-md-6" />
              <div className="col-md-6 ">
                <button
                  type="button"
                  className="btn btn-danger  btn-block"
                  onClick={rotateShape}
                >
                  Rotate
                </button>
                <br />
              </div>
              <div className="col-md-6" />
              <div className="col-md-3 ">
                <button
                  type="button"
                  className="btn btn-info btn-block"
                  onClick={() => movePlayer("left")}
                >
                  Left
                </button>
              </div>
              <div className="col-md-3 ">
                <button
                  type="button"
                  className="btn btn-info  btn-block"
                  onClick={() => movePlayer("right")}
                >
                  Right
                </button>
              </div>
              {/* <div className="col-md-12 ">
                <ul>
                  {mergeArray.map((item, i) => (
                    <li key={i}>
                      {item[0]}, {item[1]}
                    </li>
                  ))}
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </StyledTetrisWrapper>
  );
};
export default Tetris;
