import React, { useEffect, useState } from 'react';
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
  curQuestion: null | TriviaObj;
  setCurQuestion: any;
}

export const AppContext = createContext<State>({
  isWelcomeModalOpen: true,
  setIsWelcomeModalOpen: null,
  triviaArr: triviaArr,
  curQuestion: null,
  setCurQuestion: null
})

function App() {
  const [isWelcomeModalOpen, setIsWelcomeModalOpen] = useState(true);
  const [isOpenQuestionModal, setIsOpenQuestionModal] = useState(false);
  const [curQuestion, setCurQuestion] = useState(null);
  // const handleCloseModal = () => setIsWelcomeModalOpen(false);

  // fetchData("Chemistry", "1");
  useEffect(() => {

  }, [curQuestion])
  console.log(curQuestion)

  return (
    <AppContext.Provider value={{
      isWelcomeModalOpen: isWelcomeModalOpen,
      setIsWelcomeModalOpen: setIsWelcomeModalOpen,
      triviaArr: triviaArr,
      curQuestion: curQuestion,
      setCurQuestion: setCurQuestion
    }}>
      <div className="App">
        <Board />
        <QuestionAnswerModal isOpen={curQuestion !== null} />
        <Scoreboard />
      </div>
    </AppContext.Provider>
  );
}



export default App;
