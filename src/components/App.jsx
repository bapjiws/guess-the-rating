import React, { Component } from 'react';

import Reviews from './Reviews';

import main from '../../styles/main.scss';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            numOfGuesses: 0
        };
        this.updateScore = this.updateScore.bind(this);
    }

    updateScore(missed = false) {
        if (!missed) {
            this.setState((prevState, props) => ({
                score: prevState.score + 1,
                numOfGuesses: prevState.numOfGuesses + 1
            }))
        } else {
            this.setState((prevState, props) => ({
                numOfGuesses: prevState.numOfGuesses + 1
            }))
        }
    }

    render() {
        return <div>
            <div style={{textAlign: 'center'}}>
                {
                    !this.state.numOfGuesses ?
                        'Guess people\'s ratings based on their reviews!' :
                        `Your score is: ${this.state.score} / ${this.state.numOfGuesses}`
                }
            </div>
            <Reviews updateScore={this.updateScore}/>
        </div>
    }
};