import React from "react";
import { styled } from "styled-components";
import ClassSchedule from "./ClassSchedule";
import { STUDENT_COLOR } from "../../core/common/studentColor";
import useGetLessonByUser from "../../hooks/useGetLessonByUser";
import useGetLessonByParents from "../../hooks/useGetLessonByParents";

interface lessonListType {
  idx: number;
  teacherName: string;
  studentName: string;
  subject: string;
  count: number;
  nowCount: number;
  percent: number;
}

export default function ManageClass() {
  const { lessonParents } = useGetLessonByParents();

  return (
    <>
      <ManageClassTitle>수업관리</ManageClassTitle>

      <ClassScheduleListWrapper>
        {lessonParents?.map((lesson: lessonListType) => {
          const { idx, subject, teacherName, studentName, count, nowCount, percent } = lesson;
          return (
            <ClassSchedule
              key={idx}
              subjectName={subject}
              teacherName={teacherName}
              studentName={studentName}
              entireClassCount={count}
              currentClassCount={nowCount}
              currentClassCountPercent={percent}
              subjectLabelBackgroundColor={STUDENT_COLOR[idx % 11]}
            />
          );
        })}
      </ClassScheduleListWrapper>
    </>
  );
}

const ManageClassTitle = styled.h2`
  align-self: flex-start;

  margin: 2rem 0 0.8rem 1.8rem;

  ${({ theme }) => theme.fonts.title02};
  color: ${({ theme }) => theme.colors.grey900};
`;

const ClassScheduleListWrapper = styled.article`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 29.2rem;
  margin: auto;
  padding-top: 1.8rem;
  padding-bottom: 1.8rem;

  border: 1px solid ${({ theme }) => theme.colors.grey100};
  border-radius: 0.8rem;

  gap: 1.7rem;
`;
