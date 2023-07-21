import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { isModalOpen } from "../atom/common/isModalOpen";
import { paymentOrder } from "../atom/tuitionPayment/tuitionPayment";
import PreypaymentModal from "../components/modal/PreypaymentModal";
import ParentsHome from "../components/parentsHome/ParentsHome";
import TeacherHome from "../components/teacherHome/TeacherHome";

export default function Home() {
  const [isTeacherHome, setIsTeacherHome] = useState(true);
  const [openModal, setOpenModal] = useRecoilState<boolean>(isModalOpen);
  const payment = useRecoilValue(paymentOrder);

  function checkIsPrepayment() {
    if (payment === "선불") {
      setOpenModal(true);
      return <PreypaymentModal />;
    }
  }

  return (
    <>
      {checkIsPrepayment()}
      {isTeacherHome ? <TeacherHome /> : <ParentsHome />}
    </>
  );
}
