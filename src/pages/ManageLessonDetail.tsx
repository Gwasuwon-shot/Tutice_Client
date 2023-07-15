import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { styled } from "styled-components";
import { managingStatus } from "../atom/mangeLesson/managingStatus";
import BackButton from "../components/common/BackButton";
import TeacherFooter from "../components/common/TeacherFooter";
import ManageLessonCategory from "../components/manageLesson/ManageLessonCategory";
import StudentLesson from "../components/manageLesson/StudentLesson";
import StudentNameBox from "../components/manageLesson/StudentNameBox";
import StudentPayments from "../components/manageLesson/StudentPayments";
import { MANAGE_LESSON_STATUS } from "../core/manageLesson/manageLessonStatus";

export default function ManageLessonDetail() {
  // useParams 추가 예정
  const { manageLessonId } = useParams();
  const status = useRecoilValue(managingStatus);

  function checkIsStatusLesson() {
    return status === MANAGE_LESSON_STATUS.lesson;
  }

  return (
    <>
      <BackButton />
      <ManageLessonWrapper>
        <StudentNameBox />
        <ManageLessonCategory />
        {checkIsStatusLesson() ? <StudentLesson /> : <StudentPayments />}
      </ManageLessonWrapper>
      <TeacherFooter />
    </>
  );
}

const ManageLessonWrapper = styled.div`
  padding: 0 1.4rem;
  margin-top: 1rem;
`;
