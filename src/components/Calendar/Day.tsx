import styled from "styled-components";
import { isSameDay, isToday, format, isSunday } from "date-fns";
import { PARENTS_CALENDAR } from "../../core/Parents/ParentsCalendar";
import { STUDENT_COLOR } from "../../core/common/studentColor";
import ToastModal from "../common/ToastModal";

export default function Day(props) {
  const { date, setOpenModal, setSelectedDate } = props;

  const formattedDate = format(date, "d");
  const isSundayDate = isSunday(date);
  const isTodayDate = isToday(date);
  const myChildLessonList = PARENTS_CALENDAR.data.scheduleList;
  const myChildLessons = myChildLessonList.find((item) => isSameDay(new Date(item.date), date));

  function handleOpenModal() {
    setSelectedDate(date);
    setOpenModal(true);
  }
  return (
    <>
      <Dayitem onClick={handleOpenModal} key={date.toString()} $issunday={isSundayDate}>
        <DayText $istoday={isTodayDate} $isnotvalid={format(date, "M") !== format(date, "M")}>
          {formattedDate}
        </DayText>

        {myChildLessons &&
          myChildLessons.dailyScheduleList.map((lesson) => (
            <ScheduleWrapper $backgroundcolor={STUDENT_COLOR[lesson.schedule.idx % 11]} key={lesson.schedule.idx}>
              {lesson.schedule.startTime} {lesson.schedule.studentName.slice(0, 2)}
            </ScheduleWrapper>
          ))}
      </Dayitem>
    </>
  );
}

interface DayProp {
  $issunday: boolean;
}

const Dayitem = styled.article<DayProp>`
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

const ScheduleWrapper = styled.p<{ $backgroundcolor: string }>`
  display: flex;
  align-items: center;

  height: 1.4rem;

  ${({ theme }) => theme.fonts.caption02};
  color: ${({ theme }) => theme.colors.grey600};
  background-color: ${(props) => props.$backgroundcolor};
  border-radius: 2px;
`;
