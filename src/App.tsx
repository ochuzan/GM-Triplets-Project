import React, { useEffect, useState } from 'react';
// import WelcomeModal from './WelcomeModal/WelcomeModal';
import Board from './components/Board/Board';
import Scoreboard from './components/Scoreboard/Scoreboard';
import { createContext, useContext } from 'react';
import { fetchData } from './utils';
import QuestionAnswerModal from './components/QuestionAnswerModal/QuestionAnswerModal';
import { TriviaObj, triviaArr } from './dummydata';
import EndGameModal from './components/EndGameModal/EndGameModal';
import WelcomeModal from './components/WelcomeModal/WelcomeModal';

export interface State {
  isWelcomeModalOpen: boolean;
  setIsWelcomeModalOpen: (boolean: boolean) => void;
  triviaArr: [];
  curQuestion: TriviaObj | null;
  setCurQuestion: (question: TriviaObj) => void;
  numberOfQuestions: string;
  setNumberOfQuestions: (num: string) => void;
  subject: string;
  setSubject: (subject: string) => void,
  teamOne: string;
  setTeamOne: (teamOne: string) => void,
  teamTwo: string;
  setTeamTwo: (teamTwo: string) => void,
}

export const AppContext = createContext<State>({
  isWelcomeModalOpen: true,
  setIsWelcomeModalOpen: (boolean: boolean) => null,
  triviaArr: [],
  curQuestion: null,
  setCurQuestion: (question: TriviaObj) => null,
  numberOfQuestions: "0",
  setNumberOfQuestions: (num: string) => null,
  subject: "",
  setSubject: (subject: string) => null,
  teamOne: "",
  setTeamOne: (teamOne: string) => null,
  teamTwo: "",
  setTeamTwo: (teamTwo: string) => null,
})

function App() {
  const [isWelcomeModalOpen, setIsWelcomeModalOpen] = useState<boolean>(true);
  const [isOpenQuestionModal, setIsOpenQuestionModal] = useState(false);
  const [curQuestion, setCurQuestion] = useState(null);
  const [triviaArr, setTriviaArr] = useState([]);
  const [numberOfQuestions, setNumberOfQuestions] = useState<number>(0);
  const [subject, setSubject] = useState<string>("");
  const [teamOne, setTeamOne] = useState<string>("");
  const [teamTwo, setTeamTwo] = useState<string>("");

  
  useEffect(() => {

  }, [curQuestion])

  console.log(curQuestion)

  return (
    <AppContext.Provider value={{
      isWelcomeModalOpen,
      setIsWelcomeModalOpen,
      triviaArr: triviaArr,
      curQuestion: curQuestion,
      setCurQuestion: setCurQuestion,
      setTriviaArr: setTriviaArr
    }}>
      <div className="App">
        <WelcomeModal></WelcomeModal>
        <Board />
        <QuestionAnswerModal isOpen={curQuestion !== null} countClicked={countClicked} setCountClicked={setCountClicked} />
        <EndGameModal />
        <Scoreboard />
      </div>
    </AppContext.Provider>
  );
}

export default App;
