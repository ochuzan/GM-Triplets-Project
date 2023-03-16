import React, { useState } from 'react';
// import WelcomeModal from './WelcomeModal/WelcomeModal';
import Board from './components/Board/Board';
import Scoreboard from './components/Scoreboard/Scoreboard';
import { createContext, useContext } from 'react';
import { WelcomeModalWrapper } from './components/WelcomeModal/WelcomeModal.styles';
import { fetchData } from './utils';
import QuestionAnswerModal from './components/QuestionAnswerModal/QuestionAnswerModal';
import WelcomeModal from './components/WelcomeModal/WelcomeModal';

export interface State {
  isWelcomeModalOpen: boolean;
  setIsWelcomeModalOpen: (boolean: boolean) => void;
}

export const AppContext = createContext<State>({
  isWelcomeModalOpen: true,
  setIsWelcomeModalOpen: (boolean: boolean) => null
}) 

function App() {
  const [isWelcomeModalOpen, setIsWelcomeModalOpen] = useState<boolean>(true);
  
  // fetchData("Chemistry", "1");

  return (
    <AppContext.Provider value={{
      isWelcomeModalOpen,
      setIsWelcomeModalOpen,
    }}>
      <div className="App">
        <WelcomeModal></WelcomeModal>
        <Board />
        <QuestionAnswerModal />
        <Scoreboard />
      </div>
    </AppContext.Provider>
  );
}

export default App;
