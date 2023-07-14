import React from "react";
import { styled } from "styled-components";
import SubjectLabel from "../common/SubjectLabel";

interface TodayClassSceduleProps {
  studentName: string;
  subject: string;
  startTime: string;
  endTime: string;
  teacherName: string;
}

export default function TodayClassScedule(props: TodayClassSceduleProps) {
  const { studentName, subject, startTime, endTime, teacherName } = props;

  return (
    <TodayClassScheduleWrapper>
      <ClassScheduleMark $backgroundColor={"pink"} />
      <ClassTime>
        {startTime} ~ {endTime}
      </ClassTime>
      <StudentName>{studentName}</StudentName>
      <SubjectLabel subject={subject} backgroundColor="red" color="#5B6166" />
      <TeacherName>{teacherName} 선생님</TeacherName>
    </TodayClassScheduleWrapper>
  );
}

const TodayClassScheduleWrapper = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 29.2rem;
  height: 6rem;
  margin: 0.9rem auto 0 auto;

  border-radius: 0.8rem;

  border: 1px solid ${({ theme }) => theme.colors.grey100};
`;

const ClassScheduleMark = styled.div<{ $backgroundColor: string }>`
  width: 1.3rem;
  height: 3.6rem;
  margin-right: 1.8rem;

  border-radius: 0.2rem;

  background-color: ${(props) => props.$backgroundColor};
  color: ${({ theme }) => theme.colors.grey900};
`;

const ClassTime = styled.time`
  ${({ theme }) => theme.fonts.body05};
`;

const StudentName = styled.div`
  margin-right: 0.3rem;
  margin-left: 1.8rem;

  ${({ theme }) => theme.fonts.body01};
  color: ${({ theme }) => theme.colors.grey900};
`;

const TeacherName = styled.div`
  margin-left: 0.6rem;

  ${({ theme }) => theme.fonts.body04};
  color: ${({ theme }) => theme.colors.grey600};
`;
