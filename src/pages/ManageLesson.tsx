import { useRecoilState } from "recoil";
import { upcomingClassData } from "../atom/attendanceCheck/upcomingClassData";
import StudentNameLabel from "../components/common/StudentNameLabel";
import { STUDENT_COLOR } from "../core/common/studentColor";

export default function ManageLesson() {
  const [classData, setclassData] = useRecoilState(upcomingClassData);
  const { todaySchedule } = classData;
  const { lesson, schedule } = todaySchedule;
  const { idx, studentName, subject } = lesson;
  const { count, isLastCount } = schedule;

  return (
    <>
      <StudentNameLabel
        studentName={studentName}
        subject={subject}
        backgroundColor={STUDENT_COLOR[idx % 11]}
        color="#757A80"
      />
    </>
  );
}
