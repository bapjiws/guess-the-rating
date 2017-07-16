import React from 'react';

const GameInfo = props => (
    <div style={{textAlign: 'center'}}>
        {
            !props.numOfGuesses ?
                'Guess people\'s ratings based on their reviews!' :
                `Your score is: ${props.score} / ${props.numOfGuesses}`
        }
    </div>
);

export default GameInfo;