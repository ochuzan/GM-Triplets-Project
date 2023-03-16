import { useContext, useState } from "react";
import { AppContext, State } from "../../App";
// import ScoreboardButtons from "../ScoreboardButtons/ScoreboardButtons";
import { PlayerScore, Player, ScoreboardContainer } from "./Scoreboard.styles";

const Scoreboard = () => {
    // const [ playerOneScore, setPlayerOneScore ] = useState<number>(0);
    // const [ playerTwoScore, setPlayerTwoScore ] = useState<number>(0);
    const state: State = useContext(AppContext);
    // const {playerOneScore, playerTwoScore} = state
    console.log(state)

    return (
        <ScoreboardContainer>
            <Player>
                Player 1
                <PlayerScore>
                    {state.playerOneScore}
                </PlayerScore>
            </Player>
            <Player>
                Player 2
                <PlayerScore>
                    {state.playerTwoScore}
                </PlayerScore>
                
            </Player>
            
        </ScoreboardContainer>
    )
};

export default Scoreboard;