import React from 'react';
import WelcomeModal from './WelcomeModal/WelcomeModal';
import Board from './components/Board/Board';
import QuestionAnswerModal from './components/QuestionAnswerModal/QuestionAnswerModal';


function App() {
  return (
    <div className="App">
      <WelcomeModal />
      <Board />
      <QuestionAnswerModal />
    </div >
  );
}

export default App;
