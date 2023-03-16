import React from 'react'


const AnswerCard = ({ answer }: { answer: string | undefined }) => {
    return (
        <div>{answer}</div>
    )
}

export default AnswerCard;