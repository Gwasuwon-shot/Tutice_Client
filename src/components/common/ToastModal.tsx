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
    <ModalWrapper ref={modalRef}>
      <Modal>{children}</Modal>
    </ModalWrapper>
  );
}

const ModalWrapper = styled.div`
  position: absolute;
  z-index: 2;

  width: 32rem;
  height: 100vh;

  background-color: rgb(33 37 41 / 60%);

  cursor: pointer;
`;

const Modal = styled.aside`
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;

  width: 32rem;
  padding: 1.6rem 1.4rem 4.5rem;
  border-radius: 20px 20px 0 0;

  background-color: ${({ theme }) => theme.colors.white};
  opacity: 1;
`;
