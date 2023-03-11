import React from 'react';
import WelcomeModal from './WelcomeModal/WelcomeModal';
import Board from './components/Board/Board';
import Scoreboard from './components/Scoreboard/Scoreboard';


function App() {
  return (
    <div className="App">
      <WelcomeModal />
      <Board />
      <Scoreboard />
    </div>
  );
}

export default App;
