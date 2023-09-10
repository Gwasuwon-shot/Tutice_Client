import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { styled } from "styled-components";
import { attendanceStatus } from "../../atom/attendanceCheck/attendanceStatus";
import { isModalOpen } from "../../atom/common/isModalOpen";
import { isSnackBarOpen } from "../../atom/common/isSnackBarOpen";
import { paymentOrder } from "../../atom/tuitionPayment/tuitionPayment";
import { TEACHER_FOOTER_CATEGORY } from "../../core/teacherHome/teacherFooter";
import useGetLessonByUser from "../../hooks/useGetLessonByUser";
import useTeacherFooter from "../../hooks/useTeacherFooter";
import Header from "../common/Header";
import SuccessSendingAlarmSnackBar from "../common/SuccessSendingAlarmSnackBar";
import TeacherFooter from "../common/TeacherFooter";
import PreypaymentModal from "../modal/PreypaymentModal";
import NoClassHome from "./NoClassHome";
import YesClassHome from "./YesClassHome";

export default function TeacherHome() {
  const [openModal, setOpenModal] = useRecoilState<boolean>(isModalOpen);
  const [prepaymentModal, setPreypaymentModal] = useState<boolean>(false);
  const { isLessonExist } = useGetLessonByUser();
  const [snackBarOpen, setSanckBarOpen] = useRecoilState(isSnackBarOpen);
  const { handleChangeActive } = useTeacherFooter();
  const [attendanceData, setAttendanceData] = useRecoilState(attendanceStatus);
  const [payment, setPayment] = useRecoilState(paymentOrder);

  useEffect(() => {
    handleChangeActive(TEACHER_FOOTER_CATEGORY.home);
    setAttendanceData({ idx: 0, status: "" });
    if (payment === "선불") {
      setPreypaymentModal(true);
      setPayment("");
      // return <PreypaymentModal />;
    }
  }, []);

  return (
    <>
      {prepaymentModal && <PreypaymentModal setPreypaymentModal={setPreypaymentModal} />}
      {/* 경우의 수에 따라 어떤 스낵바 보일지 로직 짜야함 */}
      {snackBarOpen && <SuccessSendingAlarmSnackBar />}
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
