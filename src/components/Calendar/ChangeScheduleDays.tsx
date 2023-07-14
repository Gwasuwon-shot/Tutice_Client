import React, { useState } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { isModalOpen } from "../../atom/common/isModalOpen";
import { format, endOfMonth, endOfWeek, startOfMonth, startOfWeek, addDays, isSameDay } from "date-fns";
import { ko } from "date-fns/locale";
import ToastModal from "../common/ToastModal";
import Day from "./Day";
import { PARENTS_CALENDAR } from "../../core/Parents/ParentsCalendar";
import { STUDENT_COLOR } from "../../core/common/studentColor";
import { useNavigate } from "react-router-dom";

import StudentColorBox from "../common/StudentColorBox";

interface DaysProp {
  currentMonth: Date;
}

export default function ChangeScheduleDays(props: DaysProp) {
  const { currentMonth } = props;
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate: Date = endOfWeek(monthEnd);
  const [openModal, setOpenModal] = useRecoilState<boolean>(isModalOpen);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const myChildLessonList = PARENTS_CALENDAR.data.scheduleList;
  const navigate = useNavigate();

  const rows: React.ReactNode[] = [];
  let days: React.ReactNode[] = [];
  let day: Date = startDate;

  function handleClickEdit() {
    navigate("/change-lessonschedule");
  }
  function handleCloseButton() {
    setOpenModal(false);
  }

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      const myChildLessons = myChildLessonList.find((item) => isSameDay(new Date(item.date), day));
      days.push(
        <Day
          setOpenModal={setOpenModal}
          setSelectedDate={setSelectedDate}
          date={day}
          key={day.toString()}
          myChildLessons={myChildLessons}
        />,
      );
      day = addDays(day, 1);

      if (days.length === 7) {
        rows.push(
          <WeekWrapper key={day.toString()}>
            <DivideLine />
            <DayWrapper>{days}</DayWrapper>
          </WeekWrapper>,
        );
      }
    }

    days = [];
  }

  return (
    <>
      <Wrapper>
        {rows}
        {openModal && selectedDate && (
          <ModalWrapper>
            <ToastModal>
              <ModalContentWrapper>
                <ModalHeaderWrapper>
                  <ModalDate>{format(selectedDate, "M월 d일 EEEE", { locale: ko })}</ModalDate>
                  <ModalButtonWrapper>
                    <ModalButton onClick={handleClickEdit}>편집</ModalButton>
                    <ModalButton onClick={handleCloseButton}>닫기</ModalButton>
                  </ModalButtonWrapper>
                </ModalHeaderWrapper>
                {myChildLessonList
                  .find((item) => isSameDay(new Date(item.date), selectedDate))
                  ?.dailyScheduleList.map((lesson) => (
                    <ScheduleWrapper key={lesson.schedule.idx}>
                      <StudentColorBox backgroundColor={STUDENT_COLOR[lesson.schedule.idx % 11]} />
                      <ModalTime>
                        {lesson.schedule.startTime} - {lesson.schedule.endTime}
                      </ModalTime>
                      <ModalName>{lesson.schedule.studentName}</ModalName>
                      <ModalSubject $backgroundcolor={STUDENT_COLOR[lesson.schedule.idx % 11]}>
                        {lesson.schedule.subject}
                      </ModalSubject>
                    </ScheduleWrapper>
                  ))}
              </ModalContentWrapper>
            </ToastModal>
          </ModalWrapper>
        )}
      </Wrapper>
    </>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;

  width: 31.2rem;
  margin-right: 0.4rem;
  margin-left: 0.4rem;
`;

const WeekWrapper = styled.article`
  display: flex;
  flex-direction: column;

  width: auto;
`;

const DayWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 0.3rem;
`;

const DivideLine = styled.span`
  border-top: 1px solid ${({ theme }) => theme.colors.grey50};

  width: 32rem;
  margin-bottom: 0.6rem;
`;

const ModalWrapper = styled.section`
  display: flex;

  margin-top: -55rem;
  margin-left: -0.4rem;
`;

const ModalHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  width: 29.3rem;
`;

const ModalButtonWrapper = styled.div`
  display: flex;

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
