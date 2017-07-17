import React, { Component } from 'react';

import Reviews from './Reviews';
import GameInfo from './GameInfo';

import '../../styles/main.scss';

interface IAppProps {}

interface IAppState {
    score: number,
    numOfGuesses: number
}

export default class App extends Component<IAppProps, IAppState> {
    constructor(props: IAppProps) {
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
            <GameInfo score={this.state.score} numOfGuesses={this.state.numOfGuesses}/>
            <Reviews updateScore={this.updateScore}/>
        </div>
    }
};