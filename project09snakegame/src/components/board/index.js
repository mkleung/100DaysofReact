import React from "react";
import "./board.scss";

class Board extends React.Component {
  render() {
    let food = this.props.food;

    let foodstyle = {
      left: `${food[0]}px`,
      top: `${food[1]}px`
    };

    let snake = this.props.snake.map((item, index) => {
      let snakestyle = {
        left: `${item[0]}px`,
        top: `${item[1]}px`
      };
      return <div className="snakeBall" key={index} style={snakestyle} />;
    });

    return (
      <div className="board">
        <div className="food" style={foodstyle} />

        {snake}
      </div>
    );
  }
}
export default Board;
