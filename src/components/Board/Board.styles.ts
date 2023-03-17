import styled from "styled-components";

export const BoardContainer = styled.div`
  padding: 0 5%;
  text-align: center;
  h1 {
    font-size: 2rem;
    color: #4a503d;
  }
`;

export const BoardTable = styled.div`
  padding: 5% 5%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const GameCard = styled.div`
  margin: 15px 0px;
  width: 30%;
  min-width: 150px;
  background-color: ${({ color }) => color};
  border-radius: 15px;

  h1 {
    color: white;
  }
`;

export const PlayerAndBoardContainer = styled.div`
  border-radius: 25px;
  background-color: #faf2da;
`;
