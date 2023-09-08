import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { styled } from "styled-components";
import { attendanceStatus } from "../atom/attendanceCheck/attendanceStatus";
import { managingStatus } from "../atom/mangeLesson/managingStatus";
import CommonBackButton from "../components/common/CommonBackButton";
import TeacherFooter from "../components/common/TeacherFooter";
import ManageLessonCategory from "../components/manageLesson/ManageLessonCategory";
import StudentLesson from "../components/manageLesson/StudentLesson";
import StudentNameBox from "../components/manageLesson/StudentNameBox";
import StudentPayments from "../components/manageLesson/StudentPayments";
import { MANAGE_LESSON_STATUS } from "../core/manageLesson/manageLessonStatus";
import { TEACHER_FOOTER_CATEGORY } from "../core/teacherHome/teacherFooter";
import useTeacherFooter from "../hooks/useTeacherFooter";

export default function ManageLessonDetail() {
  const status = useRecoilValue(managingStatus);
  const [attendanceData, setAttendanceData] = useRecoilState(attendanceStatus);
  const { handleChangeActive } = useTeacherFooter();

  function checkIsStatusLesson() {
    return status === MANAGE_LESSON_STATUS.lesson;
  }

  useEffect(() => {
    setAttendanceData({ ...attendanceData, status: "" });
    handleChangeActive(TEACHER_FOOTER_CATEGORY.classManaging);
  }, []);

  return (
    <>
      <ManageLessonDetailContainer>
        {/* <SnackBarPopup isCheck={false}>4회차 결석으로 수정 완료했어요.</SnackBarPopup> */}
        <CommonBackButton />
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
