import React from "react";
import promiseData from "./quizdata/quizData";
import Questions from "./components/questions";
import Result from "./components/result";
import Progressbar from "./components/progressbar";
import Flag from "./components/flag";

class Quiz extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: [],
      current: 1,
      score: 0
    };
  }

  startQuiz = () => {
    promiseData.then(question => {
      this.setState({
        questions: question,
        current: 1,
        score: 0
      });
    });
  };

  componentDidMount = () => {
    this.startQuiz();
  };

  choose = choice => {
    let current = this.state.current;
    let correctAnswer = this.state.questions[current - 1].answer;
    let score = this.state.score;
    if (correctAnswer === choice) {
      this.setState({
        score: score + 1
      });
    }

    this.setState({
      current: current + 1
    });
  };

  playAgain = () => {
    this.startQuiz();
  };

  render() {
    let result;
    let current = this.state.current;
    let questionsLength = this.state.questions.length;
    if (current > questionsLength) {
      result = (
        <Result
          score={this.state.score}
          questionsLength={questionsLength}
          playAgain={this.playAgain.bind(this)}
        />
      );
    }
    return (
      <div className="wrapper">
        <div className="left">
          <div className="content">
            <p>Canadian Citizenship</p>
            <h3>QUIZ</h3>
          </div>
          <Flag />
        </div>
        <div className="right">
          <div className="content">
            <Progressbar current={current} questions={this.state.questions} />
            <Questions
              questions={this.state.questions}
              current={this.state.current}
              choose={this.choose}
            />
            {result}
          </div>
        </div>
      </div>
    );
  }
}
export default Quiz;
