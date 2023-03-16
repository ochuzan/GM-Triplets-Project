import React, { useEffect, useState } from 'react';
// import WelcomeModal from './WelcomeModal/WelcomeModal';
import Board from './components/Board/Board';
import Scoreboard from './components/Scoreboard/Scoreboard';
import { createContext, useContext } from 'react';
import { WelcomeModalWrapper } from './WelcomeModal/WelcomeModal.styles';
import { fetchData } from './utils';
import QuestionAnswerModal from './components/QuestionAnswerModal/QuestionAnswerModal';
import { TriviaObj, triviaArr } from './dummydata';
import EndGameModal from './components/EndGameModal/EndGameModal';

export interface State {
  isWelcomeModalOpen: boolean;
  setIsWelcomeModalOpen: any;
  triviaArr: TriviaObj[];
  curQuestion: null | TriviaObj;
  setCurQuestion: any;
  setTriviaArr: any;
}

export const AppContext = createContext<State>({
  isWelcomeModalOpen: true,
  setIsWelcomeModalOpen: null,
  triviaArr: triviaArr,
  curQuestion: null,
  setCurQuestion: null,
  setTriviaArr: null
})

function App() {
  const [isWelcomeModalOpen, setIsWelcomeModalOpen] = useState(true);
  const [curQuestion, setCurQuestion] = useState(null);
  const [triviaList, setTriviaArr] = useState(triviaArr);
  const [countClicked, setCountClicked] = useState(0);
  // const handleCloseModal = () => setIsWelcomeModalOpen(false);

  // fetchData("Chemistry", "1");

  return (
    <AppContext.Provider value={{
      isWelcomeModalOpen: isWelcomeModalOpen,
      setIsWelcomeModalOpen: setIsWelcomeModalOpen,
      triviaArr: triviaList,
      curQuestion: curQuestion,
      setCurQuestion: setCurQuestion,
      setTriviaArr: setTriviaArr
    }}>
      <div className="App">
        <Board />
        <QuestionAnswerModal isOpen={curQuestion !== null} countClicked={countClicked} setCountClicked={setCountClicked} />
        <EndGameModal />
        <Scoreboard />
      </div>
    </AppContext.Provider>
  );
}



export default App;
