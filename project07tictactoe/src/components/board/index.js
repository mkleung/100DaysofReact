import React from "react";
import "./board.scss";
import Box from "../box";

class Board extends React.Component {
  render() {
    let boxArray = this.props.board;
    let boxes = boxArray.map((box, index) => {
      return (
        <Box
          key={index}
          id={index}
          box={box}
          userPlays={this.props.userPlays}
          winBoxes={this.props.winBoxes}
        />
      );
    });

    return <div className="board">{boxes}</div>;
  }
}
export default Board;
