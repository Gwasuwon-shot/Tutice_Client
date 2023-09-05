import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import { STUDENT_COLOR } from "../../core/common/studentColor";
import useGetLessonDetail from "../../hooks/useGetLessonDetail";
import StudentNameLabel from "../common/StudentNameLabel";

export default function StudentNameBox() {
  const { manageLessonId } = useParams();
  const { idx, studentName, subject } = useGetLessonDetail(Number(manageLessonId));

  return (
    <>
      <LabelWrapper>
        <StudentNameLabel
          studentName={studentName}
          subject={subject}
          backgroundColor={STUDENT_COLOR[idx % 10]}
          color="#757A80"
          isBig={true}
        />
      </LabelWrapper>
    </>
  );
}

const LabelWrapper = styled.header`
  margin-left: 0.4rem;
`;
