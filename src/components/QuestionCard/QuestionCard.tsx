import React from 'react'
import { QuestionContent } from './QuestionCard.styles';

const QuestionCard = ({ question }: { question: string | undefined }) => {
    return (
        <QuestionContent>
            <h3>
                {question}
            </h3>
        </QuestionContent>
    )
}

export default QuestionCard;