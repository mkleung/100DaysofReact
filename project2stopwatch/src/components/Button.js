import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <button className="btn" onClick={this.props.handleTrigger}>
        {this.props.title}
      </button>
    );
  }
}

export default Button;
