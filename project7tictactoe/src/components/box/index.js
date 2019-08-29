import React from "react";
import "./box.scss";
class Box extends React.Component {
  render() {
    let id = this.props.id;
    let box = this.props.box;
    let winClass = this.props.winBoxes.includes(id) ? "win" : "";
    let boxClass = `box box${id}`;

    let boxInner = `${winClass} inner ${box}`;

    return (
      <div onClick={() => this.props.userPlays(id)} className={boxClass}>
        <div className={boxInner} />
      </div>
    );
  }
}
export default Box;
