import React from "react";
import "./head.scss";

class Head extends React.Component {
  render() {
    return (
      <div className="head">
        <div className="head__x">
          <div className="head__ximg" />
          <div>{this.props.xWins} wins</div>
        </div>

        <div className="head__o">
          <div className="head__oimg" />
          <div>{this.props.oWins} wins</div>
        </div>

        <div />
      </div>
    );
  }
}
export default Head;
