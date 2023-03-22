import React, { useState, useContext, useEffect, useRef } from 'react'
import Modal from 'react-modal';
import QuestionCard from '../QuestionCard/QuestionCard';
import ReactCardFlip from "react-card-flip";
import AnswerCard from '../AnswerCard/AnswerCard';
import { AppContext, State } from '../../App';
import Scoreboard from '../Scoreboard/Scoreboard';
import ScoreboardButtons from '../ScoreboardButtons/ScoreboardButtons';
import { Button, Card } from './QuestionAnswerModal.styles';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '700px',
        // height: '450px',
        padding: '20px',
        fontSize: '2em',
        fontWeight: '600',
        background: "#FAF2DA"
    },
};


const QuestionAnswerModal = ({ isOpen, countClicked, setCountClicked }: { isOpen: boolean, countClicked: number, setCountClicked: any }) => {
    const state: State = useContext(AppContext);
    const [flip, setFlip] = useState(false);
    const [seconds, setSeconds] = useState(6);
    let intervalRef = useRef<NodeJS.Timer>();
    let secondsRef = useRef<number>(6);

    const handleOpen = () => {
        intervalRef.current = setInterval(() => {
            if (secondsRef.current > 0) {
                secondsRef.current = secondsRef.current - 1;
                setSeconds(secondsRef.current);
                console.log(secondsRef)
            } else {
                clearInterval(intervalRef.current)
            }
        }, 1000);
    };

    const handleClick = () => {
        setFlip(!flip);
        clearInterval(intervalRef.current);
    }

    return (
        <Modal
            isOpen={isOpen}
            onAfterOpen={handleOpen}
            onRequestClose={() => {
                clearInterval(intervalRef.current);
                secondsRef.current = 6;
                setSeconds(6);
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
                    <Button onClick={handleClick}>Flip for answer</Button>
                    <p>{seconds}</p>
                </Card>
                <Card>
                    <AnswerCard answer={state.curQuestion?.answer} />
                    <Button onClick={() => setFlip(!flip)}>Flip for question</Button>
                    <Scoreboard />
                    {secondsRef.current ? <ScoreboardButtons countClicked={countClicked} /> : null}
                </Card>
            </ReactCardFlip>
        </Modal >
    )
}

export default QuestionAnswerModal;