import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

interface ButtonLayoutProps {
  onClickButton: () => void;
  onClickJump: () => void;
  buttonText: string;
  passText: string;
}

export default function ButtonLayout(props: ButtonLayoutProps) {
  const navigate = useNavigate();
  const { onClickButton, onClickJump, buttonText, passText } = props;

  return (
    <>
      <ButtonWrapper>
        <WelcomeButton type="button" onClick={onClickButton}>
          {buttonText}
        </WelcomeButton>
        <PassButton type="button" onClick={onClickJump}>
          {passText}
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
  ${({ theme }) => theme.fonts.body01};

  border-radius: 0.8rem;
`;

const PassButton = styled.button`
  display: flex;
  align-items: center;

  margin-top: 1.9rem;
  margin-bottom: 3.5rem;

  ${({ theme }) => theme.fonts.body04};

  color: ${({ theme }) => theme.colors.grey500};

  border-bottom: solid 0.05rem ${({ theme }) => theme.colors.grey500};
`;
