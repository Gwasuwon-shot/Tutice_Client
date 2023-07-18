import React from "react";
import { styled } from "styled-components";
import { nextArrowWelcomeIc } from "../../assets";

interface ButtonLayoutProps {
  onClick: () => void;
  buttonText: string;
}

export default function ButtonLayoutProps(props: ButtonLayoutProps) {
  const { onClick, buttonText } = props;
  return (
    <>
      <ButtonWrapper>
        <WelcomeButton type="button" onClick={onClick}>
          {buttonText}
        </WelcomeButton>
        <PassButton type="button">
          건너뛰기
          <NextArrowWelcomeIcon />
        </PassButton>
      </ButtonWrapper>
    </>
  );
}

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

  border-radius: 0.8rem;
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
