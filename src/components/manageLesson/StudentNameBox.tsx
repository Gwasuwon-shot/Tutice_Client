import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { styled } from "styled-components";
import { studentNameState } from "../../atom/common/datePicker";
import { lessonCodeAndPaymentId } from "../../atom/tuitionPayment/tuitionPayment";
import { STUDENT_COLOR } from "../../core/common/studentColor";
import useGetLessonDetail from "../../hooks/useGetLessonDetail";
import StudentNameLabel from "../common/StudentNameLabel";

export default function StudentNameBox() {
  const { manageLessonId } = useParams();
  const { idx, studentName, subject } = useGetLessonDetail(Number(manageLessonId));
  const [studentNameForLinkShare, setStudentNameForLinkShare] = useRecoilState<string>(studentNameState);
  const [codeAndId, setCodeAndId] = useRecoilState(lessonCodeAndPaymentId);
  const navigate = useNavigate();

  function moveToLinkShare() {
    setCodeAndId({
      ...codeAndId,
      lessonCode: "",
      lessonidx: idx,
    });
    setStudentNameForLinkShare(studentName);
    navigate("/lesson-share", { state: false });
  }

  return (
    <StudentNameBoxWrapper>
      <LabelWrapper>
        <StudentNameLabel
          studentName={studentName}
          subject={subject}
          backgroundColor={STUDENT_COLOR[idx % 10]}
          color="#757A80"
          isBig={true}
        />
      </LabelWrapper>
      <LinkShareTag onClick={moveToLinkShare}>수업링크 공유</LinkShareTag>
    </StudentNameBoxWrapper>
  );
}

const StudentNameBoxWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LinkShareTag = styled.p`
  color: ${({ theme }) => theme.colors.grey500};
  ${({ theme }) => theme.fonts.body04};
  text-decoration-line: underline;
`;

const LabelWrapper = styled.header`
  margin-left: 0.4rem;
`;
