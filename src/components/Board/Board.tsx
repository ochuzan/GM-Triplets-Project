import React, { useState, useContext } from 'react';
import { BoardTable, BoardContainer, GameCard, PlayerAndBoardContainer } from './Board.styles';
import { AppContext, State } from '../../App';
import Scoreboard from '../Scoreboard/Scoreboard';


const Board = () => {
    const state: State = useContext(AppContext)
    const triviaList = state.triviaList;

    const customStyles = {
        content: {
            display: "flex",
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            padding: '0px'
        },
    };

    return (
        <BoardContainer>
            <h1>Knowledge Quest</h1>
            <PlayerAndBoardContainer>
                <Scoreboard />
                <BoardTable>
                    {triviaList.length ? triviaList.map((trivia, i) => (
                        <GameCard color={trivia.isAnswered ? '#E28F83' : '#8E9775'} key={trivia.question} onClick={() => {
                            if (!trivia.isAnswered) state.setCurQuestion(trivia);
                        }}>
                            <h1>{i + 1}</h1>
                        </GameCard>
                    )) : null}
                </BoardTable>
            </PlayerAndBoardContainer>
        </BoardContainer>
    )
}

export default Board