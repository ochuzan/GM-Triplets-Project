import { useContext, useState } from "react";
import { AppContext, State } from "../../App";
import { PlayerScore, Player, ScoreboardContainer } from "./Scoreboard.styles";

const Scoreboard = () => {

    const state: State = useContext(AppContext);


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