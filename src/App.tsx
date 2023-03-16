import React, { useState } from 'react';
// import WelcomeModal from './WelcomeModal/WelcomeModal';
import Board from './components/Board/Board';
import Scoreboard from './components/Scoreboard/Scoreboard';
import { createContext, useContext } from 'react';
import { WelcomeModalWrapper } from './WelcomeModal/WelcomeModal.styles';
import { fetchData } from './utils';
import QuestionAnswerModal from './components/QuestionAnswerModal/QuestionAnswerModal';


function App() {
  const [isWelcomeModalOpen, setIsWelcomeModalOpen] = useState(true); 
  const handleCloseModal = () => setIsWelcomeModalOpen(false);

  const AppContext = createContext({
    isWelcomeModalOpen: isWelcomeModalOpen,
    handleCloseModal: handleCloseModal
  }) 

  fetchData("Chemistry", "1");

  return (
    <AppContext.Provider value={{
      isWelcomeModalOpen,
      handleCloseModal,
    }}>
      <div className="App">
        <Board />
        <QuestionAnswerModal />
        <Scoreboard />
      </div>
    </AppContext.Provider>
  );
}



export default App;
