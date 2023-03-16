import React, { useState } from 'react';
// import WelcomeModal from './WelcomeModal/WelcomeModal';
import Board from './components/Board/Board';
import Scoreboard from './components/Scoreboard/Scoreboard';
import { createContext, useContext } from 'react';
import { WelcomeModalWrapper } from './WelcomeModal/WelcomeModal.styles';
import { fetchData } from './utils';
import QuestionAnswerModal from './components/QuestionAnswerModal/QuestionAnswerModal';
import { TriviaObj, triviaArr } from './dummydata';

export interface State {
  isWelcomeModalOpen: boolean;
  setIsWelcomeModalOpen: any;
  triviaArr: TriviaObj[];
}

export const AppContext = createContext<State>({
  isWelcomeModalOpen: true,
  setIsWelcomeModalOpen: null,
  triviaArr: triviaArr
})

function App() {
  const [isWelcomeModalOpen, setIsWelcomeModalOpen] = useState(true);
  // const handleCloseModal = () => setIsWelcomeModalOpen(false);

  // fetchData("Chemistry", "1");

  return (
    <AppContext.Provider value={{
      isWelcomeModalOpen: isWelcomeModalOpen,
      setIsWelcomeModalOpen: setIsWelcomeModalOpen,
      triviaArr: triviaArr
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
