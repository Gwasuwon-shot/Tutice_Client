import { useState } from "react";
import { useRecoilState } from "recoil";
import { styled } from "styled-components";
import { isSnackBarOpen } from "../../atom/common/isSnackBarOpen";
import CancelLessonMaintenanceSnackBar from "../common/CancelLessonMaintenanceSnackBar";
import Header from "../common/Header";
import TeacherFooter from "../common/TeacherFooter";
import NoClassHome from "./NoClassHome";
import YesClassHome from "./YesClassHome";

export default function TeacherHome() {
  // 수업이 존재는 하는지에 대한 데이터 패칭
  const [isClassExist, setIsClassExist] = useState(true);
  const [snackBarOpen, setSanckBarOpen] = useRecoilState(isSnackBarOpen);

  return (
    <>
      {/* 경우의 수에 따라 어떤 스낵바 보일지 로직 짜야함 */}
      {/* {snackBarOpen && <SuccessSendingAlarmSnackBar />} */}
      {snackBarOpen && <CancelLessonMaintenanceSnackBar />}
      <TeacherHomeWrapper>
        <Header />
        {isClassExist ? <YesClassHome /> : <NoClassHome />}
      </TeacherHomeWrapper>
      <TeacherFooter />
    </>
  );
}

const TeacherHomeWrapper = styled.div`
  margin: 0 1.4rem;
`;
