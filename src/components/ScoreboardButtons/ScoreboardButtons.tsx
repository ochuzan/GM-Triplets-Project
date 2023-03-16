import { useContext } from "react";
import { AppContext, State } from "../../App";
import { ScoreButton } from "./ScoreboardButtons.styles";

export const ScoreboardButtons = () => {

    const state: State = useContext(AppContext);
    const {playerOneScore, setPlayerOneScore, playerTwoScore, setPlayerTwoScore} = state;

    const handlePlayerOneScore = () => {
        setPlayerOneScore(playerOneScore + 1);
        console.log(state)
        console.log(playerOneScore)
        console.log(playerOneScore + 1)
    }
    
    const handlePlayerTwoScore = () => {
        setPlayerTwoScore(playerTwoScore + 1);
        console.log(playerTwoScore + 1)
    }

    return (
        <div>
            <ScoreButton onClick={handlePlayerOneScore}>+</ScoreButton>
            <ScoreButton onClick={handlePlayerTwoScore}>+</ScoreButton>
        </div>
    )
}

export default ScoreboardButtons;