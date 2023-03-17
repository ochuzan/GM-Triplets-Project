import { useContext } from "react";
import { AppContext, State } from "../../App";
import { ScoreButton, ScoreButtonContainer } from "./ScoreboardButtons.styles";

export const ScoreboardButtons = ( { countClicked } : { countClicked: number }) => {

    const state: State = useContext(AppContext);
    const {playerOneScore, setPlayerOneScore, playerTwoScore, setPlayerTwoScore } = state;

    const handlePlayerOneScore = () => {
        if (playerOneScore == countClicked) {
            setPlayerOneScore(playerOneScore + 1);
        }
    }
    
    const handlePlayerTwoScore = () => {
        if (playerTwoScore == countClicked) {
            setPlayerTwoScore(playerTwoScore + 1);
        }
    }

    return (
        <ScoreButtonContainer>
            <ScoreButton onClick={handlePlayerOneScore}>+</ScoreButton>
            <ScoreButton onClick={handlePlayerTwoScore}>+</ScoreButton>
        </ScoreButtonContainer>
    )
}

export default ScoreboardButtons;