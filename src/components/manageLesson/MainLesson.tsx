import { STUDENT_COLOR } from "../../core/common/studentColor";
import StudentColorBox from "../common/StudentColorBox";
import SubjectLabel from "../common/SubjectLabel";
import TreeProgress from "../common/TreeProgress";

interface MainLessonProps {
  idx: number;
  studentName: string;
  subject: string;
  percent: number;
  dayOfWeekList: string[];
}

export default function MainLesson(props: MainLessonProps) {
  const { idx, studentName, subject, percent, dayOfWeekList } = props;

  return (
    <>
      <StudentColorBox backgroundColor={STUDENT_COLOR[idx % 11]} />
      <h1>{studentName}</h1>
      <SubjectLabel subject={subject} backgroundColor={STUDENT_COLOR[idx % 11]} color="#5B6166" />
      {dayOfWeekList.map((day) => day)}
      <TreeProgress progress={percent} />
    </>
  );
}
