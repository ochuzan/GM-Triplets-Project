import React from 'react';
import { BoardTable, BoardContainer, GameCard } from './Board.styles';

const Board = () => {
    return (
        <BoardContainer>
            <h1>Knowledge Quest</h1>
            <BoardTable>
                <GameCard></GameCard>
                <GameCard></GameCard>
                <GameCard></GameCard>
                <GameCard></GameCard>
                <GameCard></GameCard>
                <GameCard></GameCard>
            </BoardTable>
        </BoardContainer>
    )
}

export default Board