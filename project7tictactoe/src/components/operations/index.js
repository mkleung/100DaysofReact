import React from "react";
import "./operations.scss";
class Operations extends React.Component {
  render() {
    return (
      <div className="operations">
        <p>{this.props.winner}</p>
        <button className="button" onClick={this.props.replay}>
          Play Again
        </button>
      </div>
    );
  }
}
export default Operations;
