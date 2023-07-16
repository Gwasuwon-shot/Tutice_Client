import React from "react";
import { styled } from "styled-components";
import useNoAttendance from "../../hooks/useNoAttendance";
import NoCheckAttendanceContanier from "./NoCheckAttendanceContanier";

interface LessonData {
  idx: number;
  studentName: string;
  subject: string;
}

interface ScheduleData {
  idx: number;
  startTime: string;
  endTime: string;
  count: number;
}

interface MissingAttendanceData {
  date: string;
  missingAttedanceScheduleList: Array<{
    lesson: LessonData;
    schedule: ScheduleData;
  }>;
}

export default function NoCheckLesson() {
  const missingAttendanceDateList = useNoAttendance();

  return (
    <>
      <NoAttendanceWrapper>
        {missingAttendanceDateList.map((item: MissingAttendanceData) => {
          const { date, missingAttedanceScheduleList } = item;
          return (
            <NoAttendanceContainer key={date}>
              <NoAttendanceDate>
                {date[6] == "1" ? <h1>{date.slice(5, 7)}월</h1> : <h1>{date.slice(6, 7)}월</h1>}
                {date[8] === "0" ? <h1>{date.slice(-1)}일</h1> : <h1>{date.slice(8, 10)}일</h1>}
              </NoAttendanceDate>

              {missingAttedanceScheduleList.map((data) => {
                const { lesson, schedule } = data;
                const { idx, studentName, subject } = lesson;
                const { startTime, endTime, count } = schedule;

                return (
                  <NoCheckAttendanceContanier
                    idx={idx}
                    studentName={studentName}
                    subject={subject}
                    startTime={startTime}
                    endTime={endTime}
                    count={count}
                  />
                );
              })}
            </NoAttendanceContainer>
          );
        })}
      </NoAttendanceWrapper>
    </>
  );
}

const NoAttendanceWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  margin-right: 1.4rem;
  margin-left: 1.4rem;
`;
const NoAttendanceContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;
const NoAttendanceDate = styled.div`
  display: flex;
  gap: 0.5rem;

  background-color: ${({ theme }) => theme.colors.grey20};

  width: 100%;
  ${({ theme }) => theme.fonts.body04};
`;
