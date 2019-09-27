import React from "react";
import "./tictactoe.scss";
import Head from "./head";
import Info from "./info";
import Operations from "./operations";
import Board from "./board";

class Tictactoe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      board: new Array(9).fill(null),
      player: "x",
      winner: "",
      winBoxes: [],
      mode: "easy",
      xWins: 0,
      oWins: 0
    };

    this.replay = this.replay.bind(this);
    this.userPlays = this.userPlays.bind(this);
    this.computerPlays = this.computerPlays.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.setHardMode = this.setHardMode.bind(this);
  }

  userPlays = id => {
    if (this.state.board[id] === null && this.state.winner === "") {
      let newBoard = this.state.board;
      newBoard[id] = "x";

      let win = this.checkWinner();

      this.setState({
        board: newBoard,
        winner: win
      });

      if (win === "") {
        this.computerPlays();
        this.setState({
          winner: this.checkWinner()
        });
      }
    }
  };

  computerPlays = () => {
    let newBoard = this.state.board;
    let emptySpots = [];
    for (let i = 0; i < newBoard.length; i++) {
      if (newBoard[i] === null) {
        emptySpots.push(i);
      }
    }
    let randomPosition =
      emptySpots[Math.floor(Math.random() * emptySpots.length)];
    newBoard[randomPosition] = "o";

    // this.setState({
    //   board: newBoard
    // });
    return newBoard;
  };

  checkWinner = () => {
    let winner = "";
    let newBoard = this.state.board;
    let winRows = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [2, 5, 8],
      [1, 4, 7],
      [0, 3, 6],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < winRows.length; i++) {
      let winRow = winRows[i];
      let a = newBoard[winRow[0]];
      let b = newBoard[winRow[1]];
      let c = newBoard[winRow[2]];
      if (a !== null && a === b && b === c && a === c) {
        winner = a + " is winner!";
        let xWins = this.state.xWins;
        let oWins = this.state.oWins;
        if (a === "x") {
          xWins = xWins + 1;
        } else {
          oWins = oWins + 1;
        }
        this.setState({
          winBoxes: [winRow[0], winRow[1], winRow[2]],
          xWins: xWins,
          oWins: oWins
        });
      }
    }

    return winner;
  };

  replay = () => {
    this.setState({
      board: new Array(9).fill(null),
      player: "x",
      winner: "",
      winBoxes: []
    });
  };

  resetGame = () => {
    this.setState({
      board: new Array(9).fill(null),
      player: "x",
      winner: "",
      xWins: 0,
      oWins: 0,
      winBoxes: []
    });
  };

  setHardMode = () => {
    alert("Hard mode is not avaible yet");
  };

  render() {
    return (
      <div className="container">
        <Info resetGame={this.resetGame} setHardMode={this.setHardMode} />
        <div className="right">
          <Head
            mode={this.state.mode}
            xWins={this.state.xWins}
            oWins={this.state.oWins}
          />
          <Board
            board={this.state.board}
            userPlays={this.userPlays}
            winBoxes={this.state.winBoxes}
          />
          <Operations winner={this.state.winner} replay={this.replay} />
        </div>
      </div>
    );
  }
}
export default Tictactoe;
