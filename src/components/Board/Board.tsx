import React, { useState, useContext } from 'react';
import { BoardTable, BoardContainer, GameCard } from './Board.styles';
import { AppContext, State } from '../../App';


const Board = () => {
    const state: State = useContext(AppContext)
    const triviaList = state.triviaArr;

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
            <BoardTable>
                {triviaList.map(trivia => (
                    <GameCard key={trivia.question} onClick={() => {
                        state.setCurQuestion(trivia)
                    }}></GameCard>
                ))}
            </BoardTable>
        </BoardContainer>
    )
}

export default Board