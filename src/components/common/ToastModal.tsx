import { ReactNode } from "react";
import { styled } from "styled-components";
import useModal from "../../hooks/useModal";

interface ToastModalProps {
  children: ReactNode;
}

export default function ToastModal(props: ToastModalProps) {
  const { children } = props;
  const { modalRef, closeModal } = useModal();

  return (
    <ModalBackground ref={modalRef}>
      <Modal>{children}</Modal>
    </ModalBackground>
  );
}

const ModalBackground = styled.div`
  position: absolute;
  z-index: 2;

  width: 32rem;
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.grey900};
  opacity: 0.6;
`;

const Modal = styled.aside`
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;

  width: 32rem;
  padding: 1.6rem 1.4rem 0;
  border-radius: 20px 20px 0 0;

  background-color: ${({ theme }) => theme.colors.white};

  cursor: pointer;
`;
