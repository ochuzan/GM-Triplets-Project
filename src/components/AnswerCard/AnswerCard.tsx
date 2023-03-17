import React from 'react'
import { AnswerContent } from './AnswerCard.styles';


const AnswerCard = ({ answer }: { answer: string | undefined }) => {
    return (
        <AnswerContent>
            <h3>
                {answer}
            </h3>
        </AnswerContent>
    )
}

export default AnswerCard;