import React from 'react';

const GameInfo = props => (
    <div className="game-info">
        {
            !props.numOfGuesses ?
                'Guess people\'s ratings based on their reviews!' :
                `Your score is: ${props.score} / ${props.numOfGuesses}`
        }
    </div>
);

export default GameInfo;