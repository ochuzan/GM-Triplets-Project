import React from 'react'

const QuestionCard = ({ question }: { question: string | undefined }) => {
    return (
        <div>
            {question}
        </div>
    )
}

export default QuestionCard;