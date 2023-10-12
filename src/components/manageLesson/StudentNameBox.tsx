import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { styled } from "styled-components";
import { studentNameState } from "../../atom/common/datePicker";
import { lessonCodeAndPaymentId } from "../../atom/tuitionPayment/tuitionPayment";
import { STUDENT_COLOR } from "../../core/common/studentColor";
import useGetLessonDetail from "../../hooks/useGetLessonDetail";
import { CommonBackButton } from "../common";
import StudentNameLabel from "../common/StudentNameLabel";

export default function StudentNameBox() {
  const { manageLessonId } = useParams();
  const { idx, studentName, subject, lessonCode } = useGetLessonDetail(Number(manageLessonId));
  const [studentNameForLinkShare, setStudentNameForLinkShare] = useRecoilState<string>(studentNameState);
  const [codeAndId, setCodeAndId] = useRecoilState(lessonCodeAndPaymentId);
  const navigate = useNavigate();
  const [pageY, setPageY] = useState<number>(0);
  const documentRef = useRef(document);

  useEffect(() => {
    documentRef.current.addEventListener("scroll", handleScroll);
    return () => documentRef.current.removeEventListener("scroll", handleScroll);
  }, [pageY]);

  function handleScroll() {
    const { pageYOffset } = window;
    setPageY(pageYOffset);
  }

  function moveToLinkShare() {
    setCodeAndId({
      ...codeAndId,
      lessonCode: lessonCode,
      lessonidx: idx,
    });
    setStudentNameForLinkShare(studentName);
    navigate("/lesson-share", { state: false });
  }
  console.log(pageY);
  return (
    <StudentNameWrapper pageY={pageY} color={STUDENT_COLOR[idx % 10]}>
      <CommonBackButton />

      <StudentNameBoxWrapper pageY={pageY}>
        <LabelWrapper>
          <StudentNameLabel
            studentName={studentName}
            subject={subject}
            backgroundColor="#F1F3F5"
            color="#5B6166"
            isBig={true}
          />
        </LabelWrapper>
        <LinkShareTag onClick={moveToLinkShare}>수업링크 공유</LinkShareTag>
      </StudentNameBoxWrapper>
    </StudentNameWrapper>
  );
}

const StudentNameWrapper = styled.div<{ pageY: number; color: string }>`
  display: flex;
  flex-direction: ${({ pageY }) => (pageY > 30 ? "row" : "column")};
  background-color: ${({ color }) => color};

  width: 100%;

  position: sticky;
  top: 0;
`;

const StudentNameBoxWrapper = styled.header<{ pageY: number }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ pageY }) => pageY <= 30 && "0 1.4rem 1.4rem"};

  margin-left: ${({ pageY }) => pageY > 30 && -1}rem;
  width: ${({ pageY }) => (pageY > 30 ? 87 : 100)}%;
`;

const LinkShareTag = styled.p`
  color: ${({ theme }) => theme.colors.grey500};
  ${({ theme }) => theme.fonts.body04};
  text-decoration-line: underline;
`;

const LabelWrapper = styled.header`
  margin-left: 0.4rem;
`;
