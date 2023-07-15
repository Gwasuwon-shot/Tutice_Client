import { ReactNode } from "react";
import { styled } from "styled-components";

interface SnackBarPopupProps {
  isCheck: boolean;
  children: ReactNode;
}

export default function SnackBarPopup(props: SnackBarPopupProps) {
  const { isCheck, children } = props;

  return <SnackBar>{children}</SnackBar>;
}

const SnackBar = styled.aside`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 29.2rem;
  padding: 0.8rem 1rem;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.grey900};
`;
