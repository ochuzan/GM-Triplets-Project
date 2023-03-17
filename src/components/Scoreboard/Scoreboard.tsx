import { useContext, useState } from "react";
import { AppContext, State } from "../../App";
import { PlayerScore, Player, ScoreboardContainer } from "./Scoreboard.styles";

const Scoreboard = () => {

    const state: State = useContext(AppContext);
    const { playerOneScore, teamOne, playerTwoScore, teamTwo } = state;


    return (
        <ScoreboardContainer>
            <Player>
                {teamOne}
                <PlayerScore>
                    {playerOneScore}
                </PlayerScore>
            </Player>
            <Player>
                {teamTwo}
                <PlayerScore>
                    {playerTwoScore}
                </PlayerScore>
            </Player>
        </ScoreboardContainer>
    )
};

export default Scoreboard;