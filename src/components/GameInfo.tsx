import React from 'react';

interface IGameInfoProps {
    score: number,
    numOfGuesses: number
}

const GameInfo = (props:IGameInfoProps) => (
    <div className="game-info">
        {
            !props.numOfGuesses ?
                'Click on the stars and guess people\'s ratings based on their reviews!' :
                `Your score is: ${props.score} / ${props.numOfGuesses}`
        }
    </div>
);

export default GameInfo;