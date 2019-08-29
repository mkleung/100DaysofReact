import React from "react";
import "./info.scss";

class Info extends React.Component {
  render() {
    return (
      <div className="left">
        <h1>Tic Tac Toe</h1>
        <div className="">
          <p className="left__subtitle">Select your game mode</p>
        </div>
        <div>
          <button className="button active">Easy</button>
        </div>
        <div>
          <button onClick={this.props.setHardMode} className="button">
            Hard
          </button>
        </div>
        <div>
          <button onClick={this.props.resetGame} className="button">
            Reset Game
          </button>
        </div>

        <div />
      </div>
    );
  }
}
export default Info;
