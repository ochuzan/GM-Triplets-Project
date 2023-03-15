import styled from "styled-components";

export const BoardContainer = styled.div`
  padding: 0 5%;
  text-align: center;
  h1 {
    font-size: 2rem;
  }
`;

export const BoardTable = styled.div`
  padding: 5% 5%;
  border-radius: 25px;
  background-color: aliceblue;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const GameCard = styled.div`
  margin: 15px 0px;
  height: 50px;
  width: 30%;
  min-width: 150px;
  background-color: black;
  border-radius: 15px;
`;
