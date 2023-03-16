import React, { useEffect, useState } from 'react';
// import WelcomeModal from './WelcomeModal/WelcomeModal';
import Board from './components/Board/Board';
import Scoreboard from './components/Scoreboard/Scoreboard';
import { createContext, useContext } from 'react';
import { WelcomeModalWrapper } from './components/WelcomeModal/WelcomeModal.styles';
import { fetchData } from './utils';
import QuestionAnswerModal from './components/QuestionAnswerModal/QuestionAnswerModal';
<<<<<<< HEAD
import WelcomeModal from './components/WelcomeModal/WelcomeModal';

export interface State {
  isWelcomeModalOpen: boolean;
  setIsWelcomeModalOpen: (boolean: boolean) => void;
=======
import { TriviaObj, triviaArr } from './dummydata';

export interface State {
  isWelcomeModalOpen: boolean;
  setIsWelcomeModalOpen: any;
  triviaArr: TriviaObj[];
  curQuestion: null | TriviaObj;
  setCurQuestion: any;
>>>>>>> 4b3d74630cf0b12e034ea11bb172059649b34d1b
}

export const AppContext = createContext<State>({
  isWelcomeModalOpen: true,
<<<<<<< HEAD
  setIsWelcomeModalOpen: (boolean: boolean) => null
}) 

function App() {
  const [isWelcomeModalOpen, setIsWelcomeModalOpen] = useState<boolean>(true);
  
  // fetchData("Chemistry", "1");

  return (
    <AppContext.Provider value={{
      isWelcomeModalOpen,
      setIsWelcomeModalOpen,
=======
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
>>>>>>> 4b3d74630cf0b12e034ea11bb172059649b34d1b
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
