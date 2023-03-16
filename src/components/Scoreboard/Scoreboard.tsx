import { useState } from "react";
import { PlayerScore, Player, ScoreboardContainer, ScoreButton } from "./Scoreboard.styles";

const Scoreboard = () => {
    const [ playerOneScore, setPlayerOneScore ] = useState(0);
    const [ playerTwoScore, setPlayerTwoScore ] = useState(0);

    const handlePlayerOneScore = () => {
        setPlayerOneScore(playerOneScore + 1);
    }

    const handlePlayerTwoScore = () => {
        setPlayerTwoScore(playerTwoScore + 1);
    }

    return (
        <ScoreboardContainer>
            <Player>
                Player 1
                <PlayerScore>
                    {playerOneScore}
                </PlayerScore>
                <ScoreButton onClick={handlePlayerOneScore}>+</ScoreButton>
            </Player>
            <Player>
                Player 2
                <PlayerScore>
                    {playerTwoScore}
                </PlayerScore>
                <ScoreButton onClick={handlePlayerTwoScore}>+</ScoreButton>
            </Player>
        </ScoreboardContainer>
    )
};

export default Scoreboard;