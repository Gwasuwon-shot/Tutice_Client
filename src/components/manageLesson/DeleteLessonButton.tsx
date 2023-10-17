import React from "react";
import styled from "styled-components";
import { BasicDoubleModal } from "../common";
export default function DeleteLessonButton(props) {
  const { setIsClickedDeleteButton, setOpenModal } = props;

  function handleClickConfirmDelete() {}

  function handleBackToManageLessonPage() {
    setIsClickedDeleteButton(false);
    setOpenModal(false);
  }

  return (
    <>
      <BasicDoubleModal
        leftButtonName="취소"
        rightButtonName="확인"
        handleClickLeftButton={handleBackToManageLessonPage}
        handleClickRightButton={handleClickConfirmDelete}>
        <ModalQuestion>수업 삭제시, 모든 기록이 사라집니다 </ModalQuestion>
        <ModalQuestion>삭제하시겠어요?</ModalQuestion>
      </BasicDoubleModal>
    </>
  );
}

const ModalQuestion = styled.h2`
  ${({ theme }) => theme.fonts.body02};
  color: ${({ theme }) => theme.colors.grey900};
`;
