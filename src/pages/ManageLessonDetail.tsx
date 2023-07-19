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
  const status = useRecoilValue(managingStatus);

  function checkIsStatusLesson() {
    return status === MANAGE_LESSON_STATUS.lesson;
  }

  return (
    <>
      <ManageLessonDetailContainer>
        {/* <SnackBarPopup isCheck={false}>4회차 결석으로 수정 완료했어요.</SnackBarPopup> */}
        <BackButton />
        <ManageLessonWrapper>
          <StudentNameBox />
          <ManageLessonCategory />
          {checkIsStatusLesson() ? <StudentLesson /> : <StudentPayments />}
        </ManageLessonWrapper>
      </ManageLessonDetailContainer>
      <TeacherFooter />
    </>
  );
}

const ManageLessonWrapper = styled.div`
  margin-top: 1rem;
`;

const ManageLessonDetailContainer = styled.section`
  padding: 0 1.4rem;
`;
