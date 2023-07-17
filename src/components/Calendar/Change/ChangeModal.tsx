import { format, isSameDay } from "date-fns";
import { ko } from "date-fns/locale";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { STUDENT_COLOR } from "../../../core/common/studentColor";
import useGetTeacherSchedule from "../../../hooks/useGetTeacherSchedule";
import StudentColorBox from "../../common/StudentColorBox";
import ToastModal from "../../common/ToastModal";

import { EditPencilIc, removeTrashCan } from "../../../assets";
import { modalType } from "../../../type/calendar/modalType";

export default function ChangeModal(props: modalType) {
  const { selectedDate, setOpenModal } = props;
  const { scheduleList } = useGetTeacherSchedule();
  const navigate = useNavigate();

  const [isEdit, setIsEdit] = useState(false);

  function handleCloseButton() {
    //update 로직 추가
    setOpenModal(false);
    setIsEdit(false);
  }

  function moveClickEditPage() {
    //params 추가
    navigate("/change-lessonschedule");
  }

  function handleClickEdit() {
    setIsEdit(true);
  }

  return (
    <>
      <ToastModal>
        <ModalContentWrapper>
          <ModalHeaderWrapper>
            {selectedDate && <ModalDate>{format(selectedDate, "M월 d일 EEEE", { locale: ko })}</ModalDate>}
            {isEdit ? (
              <ModalButtonWrapper>
                <ModalButton onClick={handleCloseButton}>완료</ModalButton>
              </ModalButtonWrapper>
            ) : (
              <ModalButtonWrapper>
                <ModalButton onClick={handleClickEdit}>편집</ModalButton>
                <ModalButton onClick={handleCloseButton}>닫기</ModalButton>
              </ModalButtonWrapper>
            )}
          </ModalHeaderWrapper>
          {selectedDate &&
            scheduleList
              .find((item) => isSameDay(new Date(item.date), selectedDate))
              ?.dailyScheduleList.map((lesson) => {
                const { schedule } = lesson;
                const { idx, subject, studentName, startTime, endTime } = schedule;

                return (
                  <ScheduleWrapper key={idx}>
                    <ScheduleContainer>
                      <StudentColorBox backgroundColor={STUDENT_COLOR[idx % 11]} />
                      <ModalTime>
                        {startTime} - {endTime}
                      </ModalTime>
                      <ModalName>{studentName}</ModalName>
                      <ModalSubject $backgroundcolor={STUDENT_COLOR[idx % 11]}>{subject}</ModalSubject>
                    </ScheduleContainer>

                    {isEdit ? (
                      <ScheduleEditWrapper>
                        <EditScheduleButton onClick={moveClickEditPage} />
                        <RemoveSchedule />
                      </ScheduleEditWrapper>
                    ) : undefined}
                  </ScheduleWrapper>
                );
              })}
        </ModalContentWrapper>
      </ToastModal>
    </>
  );
}

const ModalHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  width: 29.3rem;
`;

const ModalButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  width: 6.2rem;

  gap: 1.2rem;
`;

const ModalButton = styled.button`
  display: felx;

  ${({ theme }) => theme.fonts.body02};
  color: ${({ theme }) => theme.colors.grey400};
`;

const ModalContentWrapper = styled.article`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  width: 29.2rem;
  height: auto;
  gap: 1.4rem;
`;

const ModalDate = styled.p`
  ${({ theme }) => theme.fonts.body02};
  color: ${({ theme }) => theme.colors.grey700};
`;

const ScheduleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 29.3rem;
`;

const ScheduleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.9rem;
`;

const ModalTime = styled.p`
  ${({ theme }) => theme.fonts.body04};
  color: ${({ theme }) => theme.colors.grey300};
`;

const ModalName = styled.p`
  ${({ theme }) => theme.fonts.body01};
  color: ${({ theme }) => theme.colors.grey700};
`;

const ModalSubject = styled.span<{ $backgroundcolor: string }>`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 1.6rem;
  padding: 0.2rem 0.6rem;

  background-color: ${(props) => props.$backgroundcolor};
  ${({ theme }) => theme.fonts.caption01};
  color: ${({ theme }) => theme.colors.grey500};
  border-radius: 8px;
`;

const EditScheduleButton = styled(EditPencilIc)`
  width: 1.6rem;
  height: 1.6rem;
`;

const RemoveSchedule = styled(removeTrashCan)`
  width: 1.6rem;
  height: 1.6rem;
`;

const ScheduleEditWrapper = styled.div`
  display: felx;
`;
