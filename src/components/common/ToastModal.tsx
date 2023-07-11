import { ReactNode } from "react";
import { styled } from "styled-components";

interface ToastModalProps {
  children: ReactNode;
}

export default function ToastModal(props: ToastModalProps) {
  const { children } = props;

  return (
    <>
      <Modal>{children}</Modal>
    </>
  );
}

const Modal = styled.aside`
  border-radius: 20px 20px 0 0;

  background-color: ${({ theme }) => theme.colors.white};
`;
