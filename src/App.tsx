import React, { useState } from 'react';
// import WelcomeModal from './WelcomeModal/WelcomeModal';
import Board from './components/Board/Board';
import { createContext, useContext } from 'react';
import { WelcomeModalWrapper } from './WelcomeModal/WelcomeModal.styles';
import { fetchData } from './utils';


function App() {
  const [isWelcomeModalOpen, setIsWelcomeModalOpen] = useState(true); 
  const handleCloseModal = () => setIsWelcomeModalOpen(false);

  const AppContext = createContext({
    isWelcomeModalOpen: isWelcomeModalOpen,
    handleCloseModal: handleCloseModal
  }) 

  fetchData("Chemistry", "1");

  return (
    <AppContext.Provider value={{
      isWelcomeModalOpen,
      handleCloseModal,
    }}>
      <div className="App">
        <Board />
      </div>
    </AppContext.Provider>
  );
}



export default App;
