import React from "react";
import { styled } from "styled-components";
import ClassSchedule from "./ClassSchedule";
import { STUDENT_COLOR } from "../../core/common/studentColor";

export default function ManageClass() {
  const lessonList = [
    {
      idx: 1,
      teacherName: "박송현",
      studentName: "김수화",
      subject: "수학",
      count: 10,
      nowCount: 3,
      percent: 50,
    },
    {
      idx: 2,
      teacherName: "박송현",
      studentName: "김수화",
      subject: "수학",
      count: 10,
      nowCount: 4,
      percent: 40,
    },
    {
      idx: 3,
      teacherName: "박송현",
      studentName: "김수화",
      subject: "수학",
      count: 10,
      nowCount: 3,
      percent: 30,
    },
  ];

  return (
    <>
      <ManageClassTitle>수업관리</ManageClassTitle>

      <ClassScheduleListWrapper>
        {lessonList.map((lesson) => {
          return (
            <ClassSchedule
              key={lesson.idx}
              subjectName={lesson.subject}
              teacherName={lesson.teacherName}
              studentName={lesson.studentName}
              entireClassCount={lesson.count}
              currentClassCount={lesson.nowCount}
              currentClassCountPercent={lesson.percent}
              subjectLabelBackgroundColor={STUDENT_COLOR[lesson.idx % 11]}
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
