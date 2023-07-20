import { styled } from "styled-components";
import { STUDENT_COLOR } from "../../core/common/studentColor";
import ClassSchedule from "./ClassSchedule";

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
              subjectLabelBackgroundColor={STUDENT_COLOR[idx % 10]}
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
