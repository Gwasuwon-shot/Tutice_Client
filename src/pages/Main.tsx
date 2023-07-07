import { styled } from "styled-components";

export default function Main() {
  return <MainWrapper>Main</MainWrapper>;
}

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;

  width: 20rem;
  margin-left: 3rem;

  border: 1px solid black;
`;
