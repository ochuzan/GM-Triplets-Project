import { Configuration, OpenAIApi } from "openai"
import { useContext, useEffect, useState } from "react";
import { fetchData } from "../../utils";
import ReactModal from 'react-modal';
import { WelcomeModalWrapper } from "./WelcomeModal.styles";
import { State } from "../../App";
import { AppContext } from "../../App";


const WelcomeModal = () => {
    ReactModal.setAppElement('#root');
    const state: State = useContext(AppContext);

      
  const handleCloseModal = () => state.setIsWelcomeModalOpen(false);

    useEffect( () => {
        // fetchData("Art History", "5");
    }, [])
    
    return (
      <div>
        {
        state.isWelcomeModalOpen
        ? 
        <WelcomeModalWrapper>
          <ReactModal isOpen={state.isWelcomeModalOpen} style={{content: {width: "50vw", height: "50vh"}, overlay: {top: "15%", left: "20%"}}}>
            hi there
            <button onClick={handleCloseModal}>Close</button>
          </ReactModal>
        </WelcomeModalWrapper>
        : null
        }
      </div>
    )
}

export default WelcomeModal