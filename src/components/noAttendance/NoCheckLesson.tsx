import React from "react";
import { styled } from "styled-components";
import { NO_ATTENDNACE_CHECK } from "../../core/noAttendanceCheck/noAttendance";
import StudentColorBox from "../common/StudentColorBox";
import { STUDENT_COLOR } from "../../core/common/studentColor";
import SubjectLabel from "../common/SubjectLabel";
import NoCheckPageAttendanceButton from "../common/NoCheckPageAttendanceButton";

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
  const { missingAttendanceDateList } = NO_ATTENDNACE_CHECK.data;

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
                  <ContentContainer>
                    <StudentColorBox backgroundColor={STUDENT_COLOR[idx % 11]} />
                    <InforContainer>
                      <TimeWrapper>
                        <Time>
                          {startTime} ~ {endTime}
                        </Time>
                        <Bar> | </Bar>
                        <Time>{count}회차</Time>
                      </TimeWrapper>
                      <NameSubjectWrapper>
                        <Name> {studentName}</Name>
                        <Subject>
                          <SubjectLabel subject={subject} backgroundColor={STUDENT_COLOR[idx % 11]}></SubjectLabel>
                        </Subject>
                      </NameSubjectWrapper>
                    </InforContainer>
                    <NoCheckPageAttendanceButton />
                  </ContentContainer>
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
const ContentContainer = styled.div`
  display: flex;
  gap: 1.4rem;
`;

const InforContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  margin-right: 6rem;
`;

const Time = styled.h2`
  ${({ theme }) => theme.fonts.body06};
  color: ${({ theme }) => theme.colors.grey500};
`;

const TimeWrapper = styled.div`
  display: flex;

  height: 1.3rem;

  gap: 0.5rem;
`;

const Name = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.fonts.body01};
  color: ${({ theme }) => theme.colors.grey900};
`;

const Subject = styled.h3`
  ${({ theme }) => theme.fonts.caption01};
  color: ${({ theme }) => theme.colors.grey500};

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Bar = styled.p`
  color: ${({ theme }) => theme.colors.grey100};
`;

const NameSubjectWrapper = styled.div`
  display: flex;

  height: 1.6rem;
  gap: 0.4rem;
`;
