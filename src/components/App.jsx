import React, { Component } from 'react';

import Reviews from './Reviews';

import main from '../../styles/main.scss';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0
        };
        this.increaseScore = this.increaseScore.bind(this);
    }

    increaseScore() {
        this.setState((prevState, props) => ({
            score: prevState.score + 1
        }))
    }

    render() {
        return <div>
            <div style={{textAlign: 'center'}}>Score: {this.state.score}</div>
            <Reviews increaseScore={this.increaseScore}/>
        </div>
    }
};