import React from "react";
import "./result.scss";

class Result extends React.Component {
  render() {
    let quizLength = this.props.questionsLength;
    let score = this.props.score;
    let result = (score / quizLength) * 100;
    let resultText =
      result > 75 ? "Congratulations! You pass the test" : "You failed!";

    return (
      <div className="result">
        <div className="resultText">
          <h3>{resultText}</h3>
          <p>
            {score} out of {quizLength} answers correct. You scored {result}%
          </p>
        </div>
        <button className="playAgain" onClick={() => this.props.playAgain()}>
          Play Again
        </button>
      </div>
    );
  }
}
export default Result;
