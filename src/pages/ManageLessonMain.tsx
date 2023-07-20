import { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { isSnackBarOpen } from "../atom/common/isSnackBarOpen";
import CancelLessonMaintenanceSnackBar from "../components/common/CancelLessonMaintenanceSnackBar";
import TeacherFooter from "../components/common/TeacherFooter";
import ExtensionQuestion from "../components/manageLesson/ExtensionQuestion";
import MainLessons from "../components/manageLesson/MainLessons";
import SuccessLessonMaintenanceSanckBar from "../components/modal/SuccessLessonMaintenanceSanckBar";

export default function ManageLessonMain() {
  const [snackBarOpen, setSanckBarOpen] = useRecoilState(isSnackBarOpen);
  const [isSucces, setIsSuccess] = useState(true);

  return (
    <>
      {snackBarOpen && isSucces && <SuccessLessonMaintenanceSanckBar />}
      {snackBarOpen && !isSucces && <CancelLessonMaintenanceSnackBar />}
      <MainLessonsWrapper>
        <MainLessonsHeader>수업관리</MainLessonsHeader>
        <ExtensionQuestion setIsSuccess={setIsSuccess} />
        <MainLessons />
      </MainLessonsWrapper>
      <TeacherFooter />
    </>
  );
}

const MainLessonsWrapper = styled.section`
  padding: 0 1.4rem;
`;

const MainLessonsHeader = styled.header`
  margin: 4rem 0 1.6rem;

  color: ${({ theme }) => theme.colors.grey900};

  ${({ theme }) => theme.fonts.title01};
`;
