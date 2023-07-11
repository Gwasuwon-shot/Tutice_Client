import { styled } from "styled-components";

interface RoundBottomButtonProps {
  buttonMessage: string;
}

export default function RoundBottomButton(props: RoundBottomButtonProps) {
  const { buttonMessage } = props;
  return <RoundBottomButtonWrapper>{buttonMessage}</RoundBottomButtonWrapper>;
}

const RoundBottomButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 29.2rem;
  height: 5rem;

  background-color: ${({ theme }) => theme.colors.green5};
  color: ${({ theme }) => theme.colors.grey0};

  ${({ theme }) => theme.fonts.title02};

  border-radius: 0.8rem;
`;
