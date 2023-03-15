import React, { useState } from 'react'
import Modal from 'react-modal';
import QuestionCard from '../QuestionCard/QuestionCard';
import ReactCardFlip from "react-card-flip";
import AnswerCard from '../AnswerCard/AnswerCard';

interface ModalProp {
    showFront: any;
    setShowFront: any;
}

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

const QuestionAnswerModal = () => {
    const [flip, setFlip] = useState(true);
    const [modalIsOpen, setIsOpen] = React.useState(false);

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setIsOpen(false)}
            style={customStyles}
        >
            <ReactCardFlip isFlipped={flip} flipDirection="vertical">
                <div>
                    <QuestionCard />
                    <button onClick={() => setFlip(!flip)}>Switch</button>

                </div>
                <div>
                    <AnswerCard />
                    <button onClick={() => setFlip(!flip)}>Switch</button>
                </div>
            </ReactCardFlip>
        </Modal>
    )
}

export default QuestionAnswerModal;