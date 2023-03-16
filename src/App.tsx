import React, { useEffect, useState } from 'react';
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
  triviaArr: [];
  curQuestion: string;
  setCurQuestion: (question: string) => void;
}

export const AppContext = createContext<State>({
  isWelcomeModalOpen: true,
  setIsWelcomeModalOpen: (boolean: boolean) => null,
  triviaArr: [triviaArr],
  curQuestion: null,
  setCurQuestion: null
})

function App() {
  const [isWelcomeModalOpen, setIsWelcomeModalOpen] = useState<boolean>(true);
  const [isOpenQuestionModal, setIsOpenQuestionModal] = useState(false);
  const [curQuestion, setCurQuestion] = useState(null);
  
  useEffect(() => {

  }, [curQuestion])

  console.log(curQuestion)

  return (
    <AppContext.Provider value={{
      isWelcomeModalOpen,
      setIsWelcomeModalOpen,
      triviaArr: triviaArr,
      curQuestion: curQuestion,
      setCurQuestion: setCurQuestion
    }}>
      <div className="App">
        <WelcomeModal></WelcomeModal>
        <Board />
        <QuestionAnswerModal isOpen={curQuestion !== null} />
        <Scoreboard />
      </div>
    </AppContext.Provider>
  );
}

export default App;
