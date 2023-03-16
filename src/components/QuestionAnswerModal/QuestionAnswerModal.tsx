import React, { useState, useContext } from 'react'
import Modal from 'react-modal';
import QuestionCard from '../QuestionCard/QuestionCard';
import ReactCardFlip from "react-card-flip";
import AnswerCard from '../AnswerCard/AnswerCard';
import { AppContext, State } from '../../App';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};


const QuestionAnswerModal = ({ isOpen }: { isOpen: boolean }) => {
    const [flip, setFlip] = useState(true);
    const state: State = useContext(AppContext)

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={() => {
                state.setCurQuestion(null)
            }}
            style={customStyles}
        >
            <ReactCardFlip isFlipped={flip} flipDirection="vertical">
                <div>
                    <QuestionCard question={state.curQuestion?.question} />
                    <button onClick={() => setFlip(!flip)}>Switch</button>

                </div>
                <div>
                    <AnswerCard answer={state.curQuestion?.answer} />
                    <button onClick={() => setFlip(!flip)}>Switch</button>
                </div>
            </ReactCardFlip>
        </Modal>
    )
}

export default QuestionAnswerModal;