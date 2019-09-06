import React from "react";
import "./head.scss";
class Head extends React.Component {
  render() {
    let button =
      this.props.game === "on" ? (
        <button
          className="play"
          onClick={() => {
            this.props.stop();
          }}
        >
          <i className="material-icons">stop</i>
        </button>
      ) : (
        <button
          className="play"
          onClick={() => {
            this.props.start();
          }}
        >
          <i className="material-icons">play_arrow</i>
        </button>
      );

    return (
      <div className="head">
        <div className="score">High Score: {this.props.score.length - 3}</div>
        {button}
        <button
          className="replay"
          onClick={() => {
            this.props.replay();
          }}
        >
          <i className="icon material-icons">replay</i>
        </button>
      </div>
    );
  }
}
export default Head;
