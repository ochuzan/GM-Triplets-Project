import React, { useState } from 'react';
import { BoardTable, BoardContainer, GameCard } from './Board.styles';
import QuestionAnswerModal from '../QuestionAnswerModal/QuestionAnswerModal';


const Board = () => {
    const [showFront, setShowFront] = useState<boolean>(false);

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

    const handleClick = () => {
        setShowFront(!showFront)
    }

    return (
        <BoardContainer>
            <h1>Knowledge Quest</h1>
            <BoardTable>

                <GameCard onClick={handleClick}></GameCard>
                <GameCard onClick={handleClick}></GameCard>
                <GameCard onClick={handleClick}></GameCard>
                <GameCard onClick={handleClick}></GameCard>
                <GameCard onClick={handleClick}></GameCard>
                <GameCard onClick={handleClick}></GameCard>

            </BoardTable>
        </BoardContainer>
    )
}

export default Board