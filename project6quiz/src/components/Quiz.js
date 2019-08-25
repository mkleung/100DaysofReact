import React from 'react'
import "./styles.scss"
import quizService from "../quizService";
import QuestionBox from './QuestionBox'
import Result from "./Result"

class Quiz extends React.Component {
    state = {
        questionBank: [],
        score: 0,
        responses: 0
    }
    getQuestions = () => {
        quizService().then(question => {
            this.setState({
                questionBank: question
            });
        });

    }

    playAgain = () => {
        this.getQuestions();
        this.setState({
            score: 0,
            responses: 0
        })
    }

    computerAnswer = (answer, correctAnswer) => {
        if (answer === correctAnswer) {
            this.setState({
                score: this.state.score + 1
            })
        }
        this.setState({
            responses: this.state.responses < 3 ? this.state.responses + 1 : 3
        })
    }

    componentDidMount() {
        this.getQuestions();
    }

    render() {
        return (
            <div>
                <h1>Quiz</h1>
                {this.state.questionBank.length > 0 &&
                this.state.responses < 3 &&
                this.state.questionBank.map(
                        ({ question, answers, correct, questionId }) => (
                            <QuestionBox
                            question={question}
                            options={answers}
                            key={questionId}
                            selected={answer => this.computerAnswer(answer, correct)} />
                        )
                    )}

                    {this.state.responses === 3 ? (<Result score={this.state.score} playAgain={this.playAgain} />) : null}
            </div>
        );
    }
}
export default Quiz;