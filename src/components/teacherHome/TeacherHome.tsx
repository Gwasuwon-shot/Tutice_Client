import { useRecoilState } from "recoil";
import { styled } from "styled-components";
import { isSnackBarOpen } from "../../atom/common/isSnackBarOpen";
import useGetLessonByUser from "../../hooks/useGetLessonByUser";
import Header from "../common/Header";
import TeacherFooter from "../common/TeacherFooter";
import NoClassHome from "./NoClassHome";
import YesClassHome from "./YesClassHome";

export default function TeacherHome() {
  const { isLessonExist } = useGetLessonByUser();
  const [snackBarOpen, setSanckBarOpen] = useRecoilState(isSnackBarOpen);

  return (
    <>
      {/* 경우의 수에 따라 어떤 스낵바 보일지 로직 짜야함 */}
      {/* {snackBarOpen && <SuccessSendingAlarmSnackBar />} */}
      {/* {snackBarOpen && <CancelLessonMaintenanceSnackBar />} */}
      <TeacherHomeWrapper>
        <Header />
        {isLessonExist ? <YesClassHome /> : <NoClassHome />}
      </TeacherHomeWrapper>
      <TeacherFooter />
    </>
  );
}

const TeacherHomeWrapper = styled.div`
  margin: 0 1.4rem;
`;
