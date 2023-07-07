import { styled } from "styled-components";
import { MainIc } from "../assets";

export default function Main() {
  return (
    <MainWrapper>
      <h1>Main</h1>
      <MainIcon />
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;

  width: 20rem;
  margin-left: 3rem;

  border: 1px solid black;
`;

const MainIcon = styled(MainIc)`
  width: 5rem;
  height: 5rem;
`;
