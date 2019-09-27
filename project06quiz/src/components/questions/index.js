import React from "react";
import "./questions.scss";
import Question from "../../components/question";

class Questions extends React.Component {
  render() {
    let listQuestions = this.props.questions.map(
      ({ id, question, choices, answer }, index) => (
        <Question
          id={id}
          question={question}
          choices={choices}
          answer={answer}
          index={index}
          current={this.props.current}
          choose={this.props.choose}
          key={index}
        />
      )
    );

    return <div className="questionList">{listQuestions}</div>;
  }
}
export default Questions;
