import React from "react";
import { styled } from "styled-components";
import SubjectLabel from "../common/SubjectLabel";

export default function TodayClassScedule() {
  return (
    <TodayClassScheduleWrapper>
      <ClassScheduleMark markColor="pink" />
      <ClassTime>21:00 ~ 22:00</ClassTime>
      <StudentName>박송현</StudentName>
      <SubjectLabel subject="수학" backgroundColor="red" color="#5B6166" />
      <TeacherName>유수학 선생님</TeacherName>
    </TodayClassScheduleWrapper>
  );
}

const TodayClassScheduleWrapper = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 29.2rem;
  height: 6rem;
  margin-top: 0.9rem;

  border-radius: 0.8rem;
  border: 1px solid ${({ theme }) => theme.colors.grey100};
`;

const ClassScheduleMark = styled.div<{ markColor: string }>`
  width: 1.3rem;
  height: 3.6rem;
  margin-right: 1.8rem;

  background-color: ${(props) => props.markColor};
  color: ${({ theme }) => theme.colors.grey900};
`;

const ClassTime = styled.time`
  ${({ theme }) => theme.fonts.body05};
`;

const StudentName = styled.div`
  margin-left: 1.8rem;
  margin-right: 0.3rem;

  ${({ theme }) => theme.fonts.body01};
  color: ${({ theme }) => theme.colors.grey900};
`;

const TeacherName = styled.div`
  margin-left: 0.6rem;

  ${({ theme }) => theme.fonts.body04};
  color: ${({ theme }) => theme.colors.grey600};
`;
