import styled from "styled-components";

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  margin-left: 30%;
  margin-right: 30%;
  width: 100%;
  height: 100%;
`;

export const LabelWrapper = styled.label`
  margin: 3% 0;
  font-weight: bold;
  text-align: left;
`;

export const Button = styled.button`
  background: aliceblue;
  color: black;
  width: 100px;
  height: 40px;
  text-transform: uppercase;
`;