import React from "react";
import { styled } from "styled-components";
import StudentNameLabel from "../common/StudentNameLabel";
import ToastModal from "../common/ToastModal";
import useModal from "../../hooks/useModal";
import RoundBottomMiniButton from "../common/RoundBottomMiniButton";
import useExtensionLesson from "../../hooks/useExtensionLesson";

interface ExtensionLessonModalProps {
  studentName: string;
  subject: string;
  backgroundColor: string;
  color: string;
  isBig: boolean;
}

export default function ExtensionLessonModal(props: ExtensionLessonModalProps) {
  const { studentName, subject, backgroundColor, color, isBig } = props;
  const { unShowModal } = useModal();

  function handleExtensionLesson() {
    //서버 api 통신 (연장완)
    unShowModal();
  }
  return (
    <ModalWrapper>
      <ToastModal>
        <ModalTitle>수업 회차 연장</ModalTitle>
        <TextWrapper>
          <StudentNameLabel
            studentName={studentName}
            subject={subject}
            backgroundColor={backgroundColor}
            color={color}
            isBig={isBig}
          />
        </TextWrapper>
        <TextWrapper>
          <p> 수업 회차가 모두 완료됐어요 </p>
          <p>수업을 계속해서 연장하시겠어요?</p>
        </TextWrapper>
        <ButtonWrapper>
          <RoundBottomMiniButton isGreen={false} onClick={unShowModal}>
            아니요
          </RoundBottomMiniButton>
          <RoundBottomMiniButton isGreen={true} onClick={handleExtensionLesson}>
            연장할래요
          </RoundBottomMiniButton>
        </ButtonWrapper>
      </ToastModal>
    </ModalWrapper>
  );
}

const ModalWrapper = styled.div`
  position: absolute;

  margin: -24rem 0 0 -1.5rem;
`;

const ModalTitle = styled.h1`
  margin: 1rem 0 1.6rem;

  color: ${({ theme }) => theme.colors.grey900};
  ${({ theme }) => theme.fonts.title02};
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  color: ${({ theme }) => theme.colors.grey900};
  ${({ theme }) => theme.fonts.body02};
`;

const ButtonWrapper = styled.section`
  display: flex;
  justify-content: space-between;

  width: 29.5rem;
  margin-top: 4.2rem;
`;
