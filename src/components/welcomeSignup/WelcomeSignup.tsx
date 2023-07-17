import { useState } from "react";
import { styled } from "styled-components";
import AfterSignup from "./AfterSignup";
import AlertSignup from "./AlertSignup";
import { nextArrowWelcomeIc } from "../../assets";

export default function WelcomeSignup() {
  const [isWelcome, setIsWelcome] = useState(true);
  return (
    <>
      <Container>
        {isWelcome ? <AfterSignup /> : <AlertSignup />}
        <ButtonWrapper>
          <WelcomeButton>{isWelcome ? "수업 나무 생성" : "할래요"!}</WelcomeButton>
          <nextArrowWelcomeIcon />
        </ButtonWrapper>
      </Container>
    </>
  );
}

const Container = styled.div`
  margin-left: 1.8rem;

  white-space: pre-line;
`;

const ButtonWrapper = styled.div``;

const WelcomeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;

  width: 29.2rem;
  height: 4.2rem;

  background-color: ${({ theme }) => theme.colors.green5};
  color: ${({ theme }) => theme.colors.grey0};
  flex-shrink: 0;

  border-radius: 8px;
`;

const nextArrowWelcomeIcon = styled(nextArrowWelcomeIc)`
  width: 1.1rem;
  height: 1.1rem;
`;
