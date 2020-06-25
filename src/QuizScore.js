import React, { Component } from 'react'

class QuizScore extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quiz_score: 0
        }
    }

    calculateScore() {
        this.setState((state) => {
            return {
                quiz_score: state.quiz_score + 1
            }
        })
    }

    render() {
        return (
            <div>{score}</div>
        )
    }
}

export default QuizScore

