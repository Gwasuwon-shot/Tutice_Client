import { useState } from "react";
import { styled } from "styled-components";
import AfterSignup from "./AfterSignup";
import AlertSignup from "./AlertSignup";
import { nextArrowWelcomeIc } from "../../assets";

export default function WelcomeSignup() {
  const [isWelcome, setIsWelcome] = useState(true);

  function handleToNextStep() {
    setIsWelcome(false);
  }
  return (
    <>
      <Container>
        {isWelcome ? <AfterSignup /> : <AlertSignup />}
        <ButtonWrapper>
          <WelcomeButton type="button" onClick={handleToNextStep}>
            {isWelcome ? "수업 나무 생성" : "할래요"!}
          </WelcomeButton>
          <PassButton type="button">
            건너뛰기
            <NextArrowWelcomeIcon />
          </PassButton>
        </ButtonWrapper>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;

  margin-left: 1.8rem;

  white-space: pre-line;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: fixed;
  bottom: 0;
`;

const WelcomeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 28rem;
  height: 4.2rem;

  background-color: ${({ theme }) => theme.colors.green5};
  color: ${({ theme }) => theme.colors.grey0};
  flex-shrink: 0;

  border-radius: 8px;
`;

const PassButton = styled.button`
  display: flex;
  align-items: center;

  margin-top: 1.9rem;
  margin-bottom: 3.5rem;

  ${({ theme }) => theme.fonts.body06};

  color: ${({ theme }) => theme.colors.grey500};
`;

const NextArrowWelcomeIcon = styled(nextArrowWelcomeIc)`
  width: 1.1em;
  height: 1.1rem;
  margin-left: 0.8rem;
`;
