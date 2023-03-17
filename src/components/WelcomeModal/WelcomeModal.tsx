import { Configuration, OpenAIApi } from "openai"
import { useContext, useEffect, useState } from "react";
import { fetchData } from "../../utils";
import Modal from 'react-modal';
import { State } from "../../App";
import { AppContext } from "../../App";
import WelcomeForm from "../WelcomeForm/WelcomeForm";
import { FormWrapper } from "../WelcomeForm/WelcomeForm.styles";


const customStyles = {
  content: {
    display: "flex",
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    padding: '5%',
    transform: 'translate(-50%, -50%)',
  },
};

const WelcomeModal = () => {
  const state: State = useContext(AppContext);

  return (
    <div>
      {
        state.isWelcomeModalOpen
          ?
          <Modal
            isOpen={state.isWelcomeModalOpen}
            style={customStyles}
            ariaHideApp={false}>
            <WelcomeForm />
          </Modal>
          : null
      }
    </div>
  )
}

export default WelcomeModal