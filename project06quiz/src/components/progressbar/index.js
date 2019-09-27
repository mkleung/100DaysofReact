import React from "react";
import "./progressbar.scss";

class Progresbar extends React.Component {
  render() {
    let progress = this.props.current;
    var circles = [];
    for (var i = 0; i < this.props.questions.length; i++) {
      if (progress < 6) {
        circles.push(
          <div
            className={i < progress ? "circle complete" : "circle"}
            key={i}
          />
        );
      }
    }

    return <div className="progressbar">{circles} </div>;
  }
}
export default Progresbar;
