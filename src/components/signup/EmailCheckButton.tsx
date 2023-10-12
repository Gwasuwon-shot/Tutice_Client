import { styled } from "styled-components";

interface CheckButtonProps {
  text: string;
  emailTyped: boolean;
  onClick: () => void;
}

export default function CheckButton(props: CheckButtonProps) {
  const { text, emailTyped, onClick } = props;
  return (
    <CheckButtonWrapper type="button" onClick={onClick} $emailTyped={emailTyped}>
      <h1>{text}</h1>
    </CheckButtonWrapper>
  );
}

const CheckButtonWrapper = styled.button<{ $emailTyped: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 5.8rem;
  height: 3rem;

  border: 1px solid ${({ $emailTyped, theme }) => ($emailTyped ? theme.colors.green4 : theme.colors.grey70)};
  background-color: ${({ $emailTyped, theme }) => ($emailTyped ? theme.colors.green5 : theme.colors.grey70)};
  color: ${({ $emailTyped, theme }) => ($emailTyped ? theme.colors.grey0 : theme.colors.grey300)};
  border-radius: 1rem;
  ${({ theme }) => theme.fonts.body03};

  &:active {
    border: 1px solid ${({ theme }) => theme.colors.green6};
    background-color: ${({ theme }) => theme.colors.green10};
  }
`;
