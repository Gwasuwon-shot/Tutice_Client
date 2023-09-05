import { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { AddTreeCodeButtonManageIc } from "../assets";
import { isSnackBarOpen } from "../atom/common/isSnackBarOpen";
import CancelLessonMaintenanceSnackBar from "../components/common/CancelLessonMaintenanceSnackBar";
import TeacherFooter from "../components/common/TeacherFooter";
import ExtensionQuestion from "../components/manageLesson/ExtensionQuestion";
import MainLessons from "../components/manageLesson/MainLessons";
import SuccessLessonMaintenanceSanckBar from "../components/modal/SuccessLessonMaintenanceSanckBar";
import useGetMissingMaintenanceLesson from "../hooks/useGetMissingMaintenanceLesson";

export default function ManageLessonMain() {
  const [snackBarOpen, setSanckBarOpen] = useRecoilState(isSnackBarOpen);
  const [isSucces, setIsSuccess] = useState(true);
  const { missingMaintenanceLessonList } = useGetMissingMaintenanceLesson();

  function checkMissingMaintenanceLessonExist() {
    return missingMaintenanceLessonList?.length !== 0;
  }

  return (
    <>
      {snackBarOpen && isSucces && <SuccessLessonMaintenanceSanckBar />}
      {snackBarOpen && !isSucces && <CancelLessonMaintenanceSnackBar />}
      <MainLessonsWrapper>
        <MainLessonsHeader>수업관리</MainLessonsHeader>
        {checkMissingMaintenanceLessonExist() && <ExtensionQuestion setIsSuccess={setIsSuccess} />}
        <MainLessons />
        <AddTreeCodeButtonManageIcon />
      </MainLessonsWrapper>

      <TeacherFooter />
    </>
  );
}

const AddTreeCodeButtonManageIcon = styled(AddTreeCodeButtonManageIc)`
  width: 6.5rem;
`;

const MainLessonsWrapper = styled.section`
  padding: 0 1.4rem 10rem 1.4rem;
`;

const MainLessonsHeader = styled.header`
  margin: 4rem 0 1.6rem;

  color: ${({ theme }) => theme.colors.grey900};

  ${({ theme }) => theme.fonts.title01};
`;
