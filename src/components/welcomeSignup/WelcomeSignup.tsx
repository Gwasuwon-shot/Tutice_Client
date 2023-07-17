import { useState } from "react";
import { styled } from "styled-components";
import AfterSignup from "./AfterSignup";
import AlertSignup from "./AlertSignup";

export default function WelcomeSignup() {
  const [isWelcome, setIsWelcome] = useState(true);
  return (
    <Container>
      {isWelcome ? <AfterSignup /> : <AlertSignup />}
      <ButtonWrapper>
        <WelcomeButton>{isWelcome ? "수업 나무 생성" : "할래요"!}</WelcomeButton>
      </ButtonWrapper>
    </Container>
  );
}

const Container = styled.div`
  margin-left: 1.8rem;

  white-space: pre-line;
`;

const ButtonWrapper = styled.div`
  position: sticky;
  bottom: 0;
`;

const WelcomeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 95%;
  height: 4.2rem;
  flex-shrink: 0;

  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.green5};
  color: ${({ theme }) => theme.colors.grey0};
`;
