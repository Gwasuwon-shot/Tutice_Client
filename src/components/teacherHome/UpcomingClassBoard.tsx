import styled from "styled-components";
import useGetLatestScheduleByTeacher from "../../hooks/useGetLatestScheduleByTeacher";
import { UpcomingClassScheduleType } from "../../type/teacherHome/upcomingClassScheduleType";
import UpcomingClass from "./UpcomingClass";

export default function UpcomingClassBoard() {
  const { latestScheduleDay, latestScheduleList } = useGetLatestScheduleByTeacher();

  function checkUpcomingClassData() {
    return (
      new Date(latestScheduleDay?.date).getFullYear() +
      "년 " +
      Number(new Date(latestScheduleDay?.date).getMonth() + 1) +
      "월 " +
      new Date(latestScheduleDay?.date).getDate() +
      "일 "
    );
  }

  return (
    <UpcomingClassBoardWrapper>
      <UpcomingClassDate>
        {checkUpcomingClassData()}({latestScheduleDay?.dayOfWeek}) 수업
        <UpcomingClassWrapper>
          {latestScheduleList &&
            latestScheduleList?.map(({ lesson, schedule }: UpcomingClassScheduleType, idx: number) => (
              <UpcomingClass key={idx} lesson={lesson} schedule={schedule} />
            ))}
        </UpcomingClassWrapper>
      </UpcomingClassDate>
    </UpcomingClassBoardWrapper>
  );
}

const UpcomingClassBoardWrapper = styled.aside`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  width: 29.2rem;
  padding: 1.4rem 1rem 1.5rem;
  margin-top: 1.6rem;

  border: 1px solid ${({ theme }) => theme.colors.grey150};

  border-radius: 0.8rem;
`;

const UpcomingClassDate = styled.h1`
  color: ${({ theme }) => theme.colors.grey600};
  ${({ theme }) => theme.fonts.body07};
`;

const UpcomingClassWrapper = styled.section`
  width: 27.2rem;
`;
