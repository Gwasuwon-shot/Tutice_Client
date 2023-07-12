import { ReactNode } from "react";
import styled from "styled-components";
import useModal from "../../hooks/useModal";

interface BasicSingleModalProps {
  children: ReactNode;
  buttonName: string;
  handleClickSingleButton: (e: React.MouseEvent<HTMLElement>) => void;
}

export default function BasicSingleModal(props: BasicSingleModalProps) {
  const { children, buttonName, handleClickSingleButton } = props;
  const { modalRef, closeModal } = useModal();

  return (
    <ModalWrapper ref={modalRef}>
      <Modal>{children}</Modal>
      <button onClick={handleClickSingleButton}>{buttonName}</button>
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

const Modal = styled.aside``;
