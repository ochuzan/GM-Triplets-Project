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
  triviaList: TriviaObj[];
  setTriviaList: (arr: TriviaObj[]) => void;
  curQuestion: TriviaObj | null;
  setCurQuestion: (question: TriviaObj | null) => void;
  numberOfQuestions: number;
  setNumberOfQuestions: (num: number) => void;
  subject: string;
  setSubject: (subject: string) => void,
  teamOne: string;
  setTeamOne: (teamOne: string) => void,
  teamTwo: string;
  setTeamTwo: (teamTwo: string) => void,
  playerOneScore: number;
  setPlayerOneScore: (playerOneScore: number) => void,
  playerTwoScore: number;
  setPlayerTwoScore:(playerTwoScore: number) => void,
}

export const AppContext = createContext<State>({
  isWelcomeModalOpen: true,
  setIsWelcomeModalOpen: (boolean: boolean) => null,
  triviaList: [],
  setTriviaList: (arr: TriviaObj[]) => null,
  curQuestion: null,
  setCurQuestion: () => null,
  numberOfQuestions: 0,
  setNumberOfQuestions: (num: number) => null,
  subject: "",
  setSubject: (subject: string) => null,
  teamOne: "",
  setTeamOne: (teamOne: string) => null,
  teamTwo: "",
  setTeamTwo: (teamTwo: string) => null,
  playerOneScore: 0,
  setPlayerOneScore: (playerOneScore) => null,
  playerTwoScore: 0,
  setPlayerTwoScore:(playerTwoScore) => null,
})

function App() {
  const [isWelcomeModalOpen, setIsWelcomeModalOpen] = useState<boolean>(true);
  const [curQuestion, setCurQuestion] = useState<TriviaObj | null>(null);
  const [triviaList, setTriviaList] = useState(triviaArr);
  const [numberOfQuestions, setNumberOfQuestions] = useState<number>(0);
  const [subject, setSubject] = useState<string>("");
  const [teamOne, setTeamOne] = useState<string>("");
  const [teamTwo, setTeamTwo] = useState<string>("");
  const [countClicked, setCountClicked] = useState<number>(0)
  const [ playerOneScore, setPlayerOneScore ] = useState<number>(0);
  const [ playerTwoScore, setPlayerTwoScore ] = useState<number>(0);

  return (
    <AppContext.Provider value={{
      isWelcomeModalOpen,
      setIsWelcomeModalOpen,
      triviaList: triviaList,
      setTriviaList,
      curQuestion,
      setCurQuestion,
      numberOfQuestions,
      setNumberOfQuestions,
      subject,
      setSubject,
      teamOne,
      setTeamOne,
      teamTwo,
      setTeamTwo,
      playerOneScore: playerOneScore,
      setPlayerOneScore: setPlayerOneScore,
      playerTwoScore: playerTwoScore,
      setPlayerTwoScore: setPlayerTwoScore,
    }}>
      <div className="App">
        {/* <WelcomeModal></WelcomeModal> */}
        <Board />
        <QuestionAnswerModal isOpen={curQuestion !== null} countClicked={countClicked} setCountClicked={setCountClicked} />
        <EndGameModal />
        <Scoreboard />
      </div>
    </AppContext.Provider>
  );
}

export default App;