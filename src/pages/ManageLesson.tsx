import { useRecoilState } from "recoil";
import { styled } from "styled-components";
import { upcomingClassData } from "../atom/attendanceCheck/upcomingClassData";
import BackButton from "../components/common/BackButton";
import StudentNameLabel from "../components/common/StudentNameLabel";
import { STUDENT_COLOR } from "../core/common/studentColor";

export default function ManagfeLesson() {
  const [classData, setclassData] = useRecoilState(upcomingClassData);
  const { todaySchedule } = classData;
  const { lesson, schedule } = todaySchedule;
  const { idx, studentName, subject } = lesson;
  const { count, isLastCount } = schedule;

  return (
    <>
      <BackButton />
      <ManagfeLessonWrapper>
        <StudentNameLabel
          studentName={studentName}
          subject={subject}
          backgroundColor={STUDENT_COLOR[idx % 11]}
          color="#757A80"
          isBig={true}
        />
      </ManagfeLessonWrapper>
    </>
  );
}

const ManagfeLessonWrapper = styled.div`
  padding: 0 1.8rem;
  margin-top: 1rem;
`;
