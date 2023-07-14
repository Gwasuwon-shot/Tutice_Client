import { styled } from "styled-components";
import { STUDENT_COLOR } from "../../core/common/studentColor";
import useManageLesson from "../../hooks/useManageLesson";
import StudentNameLabel from "../common/StudentNameLabel";

export default function StudentNameBox() {
  const { lesson, scheduleList } = useManageLesson();
  const { idx, studentName, subject, count, nowCount } = lesson;

  return (
    <LabelWrapper>
      <StudentNameLabel
        studentName={studentName}
        subject={subject}
        backgroundColor={STUDENT_COLOR[idx % 11]}
        color="#757A80"
        isBig={true}
      />
    </LabelWrapper>
  );
}

const LabelWrapper = styled.header`
  margin-left: 0.4rem;
`;
