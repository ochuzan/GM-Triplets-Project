import styled from "styled-components";

export const ScoreButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  .playerOneButton {
    margin-right: 45px;
  }
`;

export const ScoreButton = styled.button`
  margin-top: 5px;
  background-color: black;
  color: white;
  border-radius: 5px;
  width: 40px;
  font-size: 0.8em;
`;
