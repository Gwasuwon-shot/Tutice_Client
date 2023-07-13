import React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { isModalOpen } from "../../atom/common/isModalOpen";
import {
  isSameDay,
  isToday,
  format,
  endOfMonth,
  endOfWeek,
  startOfMonth,
  startOfWeek,
  addDays,
  isSunday,
} from "date-fns";
import { PARENTS_CALENDAR } from "../../core/Parents/ParentsCalendar";
import { STUDENT_COLOR } from "../../core/common/studentColor";
import ToastModal from "../common/ToastModal";

interface DaysProp {
  currentMonth: Date;
}

export default function Days(props: DaysProp) {
  const { currentMonth } = props;
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate: Date = endOfWeek(monthEnd);
  const myChildLessonList = PARENTS_CALENDAR.data.scheduleList;
  const [openModal, setOpenModal] = useRecoilState<boolean>(isModalOpen);

  const rows: React.ReactNode[] = [];
  let days: React.ReactNode[] = [];
  let day: Date = startDate;
  let formattedDate = "";
  function handleOpenModal() {
    setOpenModal(true);
  }

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, "d");
      const sunDay = isSunday(day);
      const isTodayDate = isToday(day);

      const myChildLessons = myChildLessonList.find((item) => isSameDay(new Date(item.date), day));

      days.push(
        <Day onClick={handleOpenModal} key={day.toString()} $issunday={sunDay}>
          <DayText $istoday={isTodayDate} $isnotvalid={format(currentMonth, "M") !== format(day, "M")}>
            {formattedDate}
          </DayText>

          {myChildLessons &&
            myChildLessons.dailyScheduleList.map((lesson) => (
              <ScheduleWrapper $backgroundcolor={STUDENT_COLOR[lesson.schedule.idx % 11]} key={lesson.schedule.idx}>
                {lesson.schedule.startTime} {lesson.schedule.studentName.slice(0, 2)}
              </ScheduleWrapper>
            ))}
        </Day>,
      );
      day = addDays(day, 1);
    }
    rows.push(
      <WeekWrapper key={day.toString()}>
        <DivideLine />
        <DayWrapper>{days}</DayWrapper>
      </WeekWrapper>,
    );
    days = [];
  }

  return (
    <>
      <Wrapper>
        {rows}
        {openModal && (
          <ModalWrapper>
            <ToastModal>
              하이티비하이티비하이티비하이티비하이티비하이티비하이티비하이티비하이티비하이티비하이티비하이티비하이티비하이티비하이티비하이티비하이티비
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

interface DayProp {
  $issunday: boolean;
}

const Day = styled.article<DayProp>`
  display: flex;
  align-items: center;
  ${({ $issunday }) => `
    ${$issunday ? "color: #FCB3A6" : undefined}
  `};
  flex-direction: column;
  cursor: pointer;

  width: 4.5rem;
  height: 6rem;
  gap: 0.2rem;

  padding-bottom: 0.3rem;
`;

interface DayTextProps {
  $isnotvalid: boolean;
  $istoday: boolean;
}

const DayText = styled.p<DayTextProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 1.6rem;
  height: 1.6rem;

  ${({ $isnotvalid, $istoday }) => `
    ${$istoday ? "color: white; background-color: #0DA98E; border-radius: 50%; " : ""}
    ${$isnotvalid ? "color: #899199" : "#CED4DA"}
  `};
  ${({ theme }) => theme.fonts.caption03};
`;

const DivideLine = styled.span`
  border-top: 1px solid ${({ theme }) => theme.colors.grey50};

  width: 32rem;
  margin-bottom: 0.6rem;
`;

const ScheduleWrapper = styled.p<{ $backgroundcolor: string }>`
  display: flex;
  align-items: center;

  height: 1.4rem;

  ${({ theme }) => theme.fonts.caption02};
  color: ${({ theme }) => theme.colors.grey600};
  background-color: ${(props) => props.$backgroundcolor};
  border-radius: 2px;
`;

const ModalWrapper = styled.article`
  display: flex;

  margin-top: -55rem;
  margin-left: -0.3rem;
`;
