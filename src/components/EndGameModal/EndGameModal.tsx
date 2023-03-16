import React from 'react'
import Modal from 'react-modal';

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

const EndGame = () => {
    return (
        <Modal
            isOpen={false}
            onRequestClose={() => {
            }}
            style={customStyles}
        >
            <div> hi</div>
        </Modal >
    )
}

export default EndGame;