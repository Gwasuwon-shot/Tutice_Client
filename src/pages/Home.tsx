import { useRecoilState, useRecoilValue } from "recoil";
import { isModalOpen } from "../atom/common/isModalOpen";
import { userRoleData } from "../atom/loginUser/loginUser";
import { paymentOrder } from "../atom/tuitionPayment/tuitionPayment";
import PreypaymentModal from "../components/modal/PreypaymentModal";
import ParentsHome from "../components/parentsHome/ParentsHome";
import TeacherHome from "../components/teacherHome/TeacherHome";

export default function Home() {
  const [openModal, setOpenModal] = useRecoilState<boolean>(isModalOpen);
  const payment = useRecoilValue(paymentOrder);
  const [userRole, setUserRole] = useRecoilState(userRoleData);

  function checkIsTeacher() {
    return userRole === "선생님";
  }

  function checkIsPrepayment() {
    if (payment === "선불") {
      setOpenModal(true);
      return <PreypaymentModal />;
    }
  }

  return (
    <>
      {checkIsPrepayment()}
      {checkIsTeacher() ? <TeacherHome /> : <ParentsHome />}
    </>
  );
}
