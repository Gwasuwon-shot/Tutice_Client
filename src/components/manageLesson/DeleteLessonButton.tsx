import React from "react";
import styled from "styled-components";
import { BasicDoubleModal } from "../common";
import { QueryClient, useMutation, useQueryClient } from "react-query";
import { deleteLesson } from "../../api/deleteLesson";
import { useRecoilValue } from "recoil";
import { deleteLessonStatus } from "../../atom/mangeLesson/deleteLessonStatus";
import { getLessonByTeacher } from "../../api/getLessonByTeacher";

interface DeleteLessonButtonProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setIsClickedDeleteButton: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function DeleteLessonButton(props: DeleteLessonButtonProps) {
  const { setIsClickedDeleteButton, setOpenModal } = props;
  const deleteConfirmLesson = useRecoilValue(deleteLessonStatus);
  const queryClient = useQueryClient();

  const { mutate } = useMutation(() => deleteLesson(deleteConfirmLesson), {
    onSuccess: () => {
      queryClient.invalidateQueries("lessonByTeacher", { refetchInactive: true });

      console.log("lesson deleted!");
      setOpenModal(false);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  function handleClickConfirmDelete(): void {
    console.log("수업을 삭제중");
    mutate();
  }

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
