import React from "react";
import "./snake.scss";
import Header from "./head";
import Board from "./board";

class Snake extends React.Component {
  constructor(props) {
    super(props);

    this.timerId = 0;
    this.moveSnake = this.moveSnake.bind(this);
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.replay = this.replay.bind(this);

    this.state = {
      food: [
        Math.floor(Math.random() * 19 + 1) * 20,
        Math.floor(Math.random() * 19 + 1) * 20
      ],
      snake: [[0, 0], [20, 0], [40, 0]],
      direction: "right",
      speed: 100,
      game: "off"
    };
  }

  componentDidUpdate() {
    this.checkBorder();
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.changeDirection, false);
  }

  start = () => {
    this.timerId = setInterval(() => {
      this.moveSnake();
    }, this.state.speed);
    document.addEventListener("keydown", this.changeDirection, false);
    this.setState({
      game: "on"
    });
  };

  stop = () => {
    clearInterval(this.timerId);
    this.setState({
      game: "off"
    });
  };

  replay = () => {
    this.stop();
    this.setState({
      food: [
        Math.floor(Math.random() * 19 + 1) * 20,
        Math.floor(Math.random() * 19 + 1) * 20
      ],
      snake: [[0, 0], [20, 0], [40, 0]],
      direction: "right",
      speed: 100,
      game: "off"
    });
  };

  checkBorder = () => {
    // Check border
    let food = this.state.food;
    let newSnake = this.state.snake;
    let head = newSnake[newSnake.length - 1];
    if (head[0] > 380 || head[0] < 0 || head[1] > 380 || head[1] < 0) {
      this.stop();
      alert(`Score: ${this.state.snake.length - 3}`);
      this.replay();
    }

    // eat food

    if (head[0] === food[0] && head[1] === food[1]) {
      newSnake.unshift(food);
      this.setState({
        food: [
          Math.floor(Math.random() * 19 + 1) * 20,
          Math.floor(Math.random() * 19 + 1) * 20
        ]
      });
    }

    // check if snake eats itself
    let bodySnake = newSnake.slice(1, -1);
    for (let i = 0; i < bodySnake.length; i++) {
      if (bodySnake[i][0] === head[0] && bodySnake[i][1] === head[1]) {
        this.stop();
        alert(`Score: ${this.state.snake.length - 3}`);
        this.replay();
      }
    }
  };

  moveSnake = () => {
    let newSnake = this.state.snake;
    let newPosition;
    let lastPosition = newSnake[newSnake.length - 1];
    if (this.state.direction === "right") {
      newPosition = [lastPosition[0] + 20, lastPosition[1]];
    } else if (this.state.direction === "left") {
      newPosition = [lastPosition[0] - 20, lastPosition[1]];
    } else if (this.state.direction === "up") {
      newPosition = [lastPosition[0], lastPosition[1] - 20];
    } else if (this.state.direction === "down") {
      newPosition = [lastPosition[0], lastPosition[1] + 20];
    }

    newSnake.push(newPosition);
    newSnake.shift();
    this.setState({
      snake: newSnake
    });
  };

  changeDirection = event => {
    let direction = "right";
    let snakeDirection = this.state.direction;

    switch (event.keyCode) {
      // up
      case 38:
        direction = snakeDirection === "down" ? "down" : "up";
        break;
      // right
      case 39:
        direction = snakeDirection === "left" ? "left" : "right";
        break;
      // down
      case 40:
        direction = snakeDirection === "up" ? "up" : "down";
        break;
      // left
      case 37:
        direction = snakeDirection === "right" ? "right" : "left";
        break;
      default:
        break;
    }
    this.setState({
      direction: direction
    });
  };

  render() {
    return (
      <div className="container">
        <Header
          game={this.state.game}
          start={this.start}
          stop={this.stop}
          replay={this.replay}
          score={this.state.snake}
        />
        <Board food={this.state.food} snake={this.state.snake} />
      </div>
    );
  }
}
export default Snake;
