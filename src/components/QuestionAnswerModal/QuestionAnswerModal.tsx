import React, { useState, useContext } from 'react'
import Modal from 'react-modal';
import QuestionCard from '../QuestionCard/QuestionCard';
import ReactCardFlip from "react-card-flip";
import AnswerCard from '../AnswerCard/AnswerCard';
import { AppContext, State } from '../../App';
import Scoreboard from '../Scoreboard/Scoreboard';
import ScoreboardButtons from '../ScoreboardButtons/ScoreboardButtons';
import { Card } from './QuestionAnswerModal.styles';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '700px',
        height: '450px',
        padding: '20px',
        fontSize: '2em',
        fontWeight: '600',
        paddingTop: '100px'
    },
};


const QuestionAnswerModal = ({ isOpen, countClicked, setCountClicked }: { isOpen: boolean, countClicked: number, setCountClicked: any }) => {
    const [flip, setFlip] = useState(false);
    const state: State = useContext(AppContext)

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={() => {
                const newArr = state.triviaList.map(trivia => {
                    if (trivia?.question === state.curQuestion?.question) {
                        return { ...trivia, isAnswered: true }
                    }
                    return trivia
                });
                state.setTriviaList([...newArr]);
                state.setCurQuestion(null);
                setCountClicked(countClicked + 1);
                setFlip(false);
            }}
            style={customStyles}
            ariaHideApp={false}
        >
            <ReactCardFlip isFlipped={flip} flipDirection="vertical">
                <Card>
                    <QuestionCard question={state.curQuestion?.question} />
                    <button onClick={() => setFlip(!flip)}>Switch</button>
                </Card>
                <Card>
                    <AnswerCard answer={state.curQuestion?.answer} />
                    <button onClick={() => setFlip(!flip)}>Switch</button>
                    <Scoreboard/>
                    <ScoreboardButtons countClicked={countClicked}/>
                </Card>
            </ReactCardFlip>
        </Modal >
    )
}

export default QuestionAnswerModal;