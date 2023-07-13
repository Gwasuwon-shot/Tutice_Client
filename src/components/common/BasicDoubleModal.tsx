import { ReactNode } from "react";
import styled from "styled-components";
import useModal from "../../hooks/useModal";

interface BasicDoubleModalProps {
  children: ReactNode;
  leftButtonName: string;
  rightButtonName: string;
  handleClickLeftButton: (e: React.MouseEvent<HTMLElement>) => void;
  handleClickRightButton: (e: React.MouseEvent<HTMLElement>) => void;
}

export default function BasicDoubleModal(props: BasicDoubleModalProps) {
  const { children, leftButtonName, rightButtonName, handleClickLeftButton, handleClickRightButton } = props;
  const { modalRef, closeModal } = useModal();

  return (
    <ModalWrapper ref={modalRef}>
      <Modal>
        <ModalContents>{children}</ModalContents>
        <ButtonWrapper>
          <Button type="button" onClick={handleClickLeftButton} $isLeft={true}>
            {leftButtonName}
          </Button>
          <Button type="button" onClick={handleClickRightButton} $isLeft={false}>
            {rightButtonName}
          </Button>
        </ButtonWrapper>
      </Modal>
    </ModalWrapper>
  );
}

const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  z-index: 3;

  width: 32rem;
  height: 100vh;

  background-color: rgb(33 37 41 / 60%);

  cursor: pointer;
`;

const ModalContents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 11.8rem;
`;

const Modal = styled.aside`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 26.4rem;
  height: 16.4rem;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.white};
`;

const Button = styled.button<{ $isLeft: boolean }>`
  width: 50%;
  height: 100%;

  background-color: ${({ theme, $isLeft }) => ($isLeft ? theme.colors.green1 : theme.colors.green5)};
  color: ${({ theme, $isLeft }) => ($isLeft ? theme.colors.green5 : theme.colors.white)};

  ${({ theme }) => theme.fonts.title02};
`;

const ButtonWrapper = styled.section`
  overflow: hidden;

  width: 100%;
  height: 4.6rem;

  border-radius: 0 0 8px 8px;
`;
