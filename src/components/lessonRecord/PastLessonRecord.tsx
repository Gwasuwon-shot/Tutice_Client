import { useState } from "react";
import { css, styled } from "styled-components";
import { useParams } from "react-router-dom";
import useGetPastLessonRecord from "../../hooks/useGetPastLessonRecord";

interface PastLessonRecordProps {
  date: string;
  startTime: string;
  endTime: string;
  status: string;
}

export default function PastLessonRecord(props: PastLessonRecordProps) {
  const [attendance, setAttandance] = useState("");
  const { date, startTime, endTime, status } = props;
  const { lessonId } = useParams();
  const { lesson } = useGetPastLessonRecord(Number(lessonId));

  //커스텀 훅에서 scheduleList에 status="상태없음"이 있으면 그 객체 빼고 return하게 filtering하기
  //status
  const dateInfo = new Date(date);
  const month = dateInfo.getMonth() + 1; // 월 추출 (0부터 시작하므로 +1)
  const day = dateInfo.getDate();

  return (
    <PastLessonRecordWrapper>
      <DateWrapper>
        {month}.{day}
      </DateWrapper>
      <LessonInfoWrapper>
        <LessonCount>{lesson.nowCount}회차 수업</LessonCount>
        <LessonTime>
          {startTime}~{endTime}
        </LessonTime>
      </LessonInfoWrapper>

      <AttendanceWrapper attendance={"결석"}>{status}</AttendanceWrapper>
    </PastLessonRecordWrapper>
  );
}

const PastLessonRecordWrapper = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 29.2rem;
  height: 6.5rem;
  padding: 1.5rem 1rem 1.5rem 1rem;

  border-radius: 0.8rem;

  &:active {
    background-color: ${({ theme }) => theme.colors.grey50};
  }
`;

const DateWrapper = styled.p`
  display: flex;
  justify-content: center;
  align-self: flex-start;

  width: 3.6rem;
  height: 1.4rem;
  margin-right: 1rem;

  ${({ theme }) => theme.fonts.body07};
  color: ${({ theme }) => theme.colors.grey600};
`;

const LessonInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  margin-right: 1.4rem;
`;

const LessonCount = styled.p`
  ${({ theme }) => theme.fonts.body02};
  color: "#000000";
`;

const LessonTime = styled.time`
  ${({ theme }) => theme.fonts.body05};
  color: ${({ theme }) => theme.colors.grey600};
`;

const AttendanceWrapper = styled.p<{ attendance: string }>`
  width: 2.7rem;

  margin-left: 12.3rem;

  ${({ theme }) => theme.fonts.body01};
  color: ${({ theme }) => theme.colors.grey900};

  ${({ attendance }) =>
    attendance === "출석"
      ? css`
          color: ${({ theme }) => theme.colors.green5};
        `
      : attendance === "결석"
      ? css`
          color: ${({ theme }) => theme.colors.red6};
        `
      : css`
          color: ${({ theme }) => theme.colors.grey500};
        `};
`;
