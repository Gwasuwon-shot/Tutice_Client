import { ReactNode, useState } from "react";
import { useDrag } from "react-use-gesture";
import { useRecoilState } from "recoil";
import { keyframes, styled } from "styled-components";
import { isModalOpen } from "../../atom/common/isModalOpen";
import useModal from "../../hooks/useModal";

interface ToastModalProps {
  children: ReactNode;
}

export default function ToastModal(props: ToastModalProps) {
  const { children } = props;
  const { modalRef, closeModal } = useModal();
  const [logoPos, setLogoPos] = useState({ y: 0 });
  const [openModal, setOpenModal] = useRecoilState<boolean>(isModalOpen);

  const bindLogoPos = useDrag((params) => {
    console.log(params.offset[1]);
    setLogoPos({
      y: params.offset[1],
    });
    if (params.offset[1] > 200) {
      setOpenModal(false);
    }
  });

  return (
    <ModalWrapper ref={modalRef}>
      <ModalMovingWrapper {...bindLogoPos()} $bottom={logoPos.y}>
        <Modal>{children}</Modal>
      </ModalMovingWrapper>
    </ModalWrapper>
  );
}

const Slide = keyframes`
 from {
		transform: translate(0, 50rem);
    }
    to {
        transform: translate(0, 0rem);
    }
`;

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
  align-items: center;
  flex-direction: column;

  width: 32rem;
  padding: 1.6rem 1.4rem 4.5rem;

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px 20px 0 0;
  opacity: 1;

  animation: ${Slide} 0.5s linear forwards;
`;

const ModalMovingWrapper = styled.div<{ $bottom: number }>`
  position: absolute;
  bottom: -${({ $bottom }) => $bottom / 5}%;
`;
