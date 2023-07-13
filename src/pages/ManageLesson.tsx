import { styled } from "styled-components";
import BackButton from "../components/common/BackButton";
import StudentNameLabel from "../components/common/StudentNameLabel";
import ManageLessonCategory from "../components/manageLesson/ManageLessonCategory";
import TreeLevel from "../components/manageLesson/TreeLevel";
import { LESSON_SCHEDULE } from "../core/checkAttendance/lessonSchedule";
import { STUDENT_COLOR } from "../core/common/studentColor";

export default function ManagfeLesson() {
  // 서버에서 가져올 데이터
  const { lesson, scheduleList } = LESSON_SCHEDULE?.data;
  const { idx, studentName, subject, count, nowCount } = lesson;

  return (
    <>
      <BackButton />
      <ManageLessonWrapper>
        <LabelWrapper>
          <StudentNameLabel
            studentName={studentName}
            subject={subject}
            backgroundColor={STUDENT_COLOR[idx % 11]}
            color="#757A80"
            isBig={true}
          />
        </LabelWrapper>
        <ManageLessonCategory />
        <TreeLevel />
      </ManageLessonWrapper>
    </>
  );
}

const ManageLessonWrapper = styled.div`
  padding: 0 1.4rem;
  margin-top: 1rem;
`;

const LabelWrapper = styled.header`
  margin-left: 0.4rem;
`;
