import "./question.scss";
import React from "react";

class Question extends React.Component {
  render() {
    return (
      <div
        className={
          this.props.current === this.props.index + 1
            ? "question active"
            : "question"
        }
        key={this.props.id}
      >
        <div className="questionTitle">
          {this.props.index + 1} - {this.props.question}
        </div>
        {this.props.choices.map((text, i) => (
          <div key={i} className="choiceWrapper">
            <button
              key={i}
              className="choice"
              onClick={() => {
                this.props.choose(i);
              }}
            >
              {text}
            </button>
          </div>
        ))}
      </div>
    );
  }
}
export default Question;
