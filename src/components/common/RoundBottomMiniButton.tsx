import { ReactNode } from "react";
import { styled } from "styled-components";
interface RoundBottomMiniButtonProps {
  isGreen: boolean;
  children: ReactNode;
}

export default function RoundBottomMiniButton(props: RoundBottomMiniButtonProps) {
  const { isGreen, children } = props;

  return (
    <Button type="button" $isGreen={isGreen}>
      {children}
    </Button>
  );
}

const Button = styled.button<{ $isGreen: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1.5rem 2.4rem;
  border-radius: 8px;

  background-color: ${({ theme, $isGreen }) => ($isGreen ? theme.colors.green5 : theme.colors.green1)};
  color: ${({ theme, $isGreen }) => ($isGreen ? theme.colors.white : theme.colors.green5)};
`;
