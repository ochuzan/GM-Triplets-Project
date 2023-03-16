import { Configuration, OpenAIApi } from "openai"
import { useContext, useEffect, useState } from "react";
import { fetchData } from "../../utils";
import ReactModal from 'react-modal';
import { State } from "../../App";
import { AppContext } from "../../App";
import WelcomeForm from "../WelcomeForm/WelcomeForm";


const WelcomeModal = () => {
    ReactModal.setAppElement('#root');
    const state: State = useContext(AppContext);


    useEffect( () => {
        // fetchData("Art History", "5");
    }, [])
    
    return (
      <div>
        {
        state.isWelcomeModalOpen
        ? 
          <ReactModal isOpen={state.isWelcomeModalOpen} style={{content: {width: "50vw", height: "50vh"}, overlay: {top: "15%", left: "20%"}}}>
            <WelcomeForm/>
            {/* <button onClick={handleCloseModal}>Close</button> */}
          </ReactModal>
        : null
        }
      </div>
    )
}

export default WelcomeModal