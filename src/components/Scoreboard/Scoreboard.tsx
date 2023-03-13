import { PlayerScore, Player, ScoreboardContainer } from "./Scoreboard.styles";

const Scoreboard = () => {
    return (
        <ScoreboardContainer>
            <Player>
                Player 1
                <PlayerScore>
                    0
                </PlayerScore>
            </Player>
            <Player>
                Player 2
                <PlayerScore>
                    0
                </PlayerScore>
            </Player>
        </ScoreboardContainer>
    )
};

export default Scoreboard;