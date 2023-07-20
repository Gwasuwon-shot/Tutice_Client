import { useState } from "react";
import { useRecoilState } from "recoil";
import { isModalOpen } from "../atom/common/isModalOpen";
import PreypaymentModal from "../components/modal/PreypaymentModal";
import ParentsHome from "../components/parentsHome/ParentsHome";
import TeacherHome from "../components/teacherHome/TeacherHome";

export default function Home() {
  const [isTeacherHome, setIsTeacherHome] = useState(false);
  const [openModal, setOpenModal] = useRecoilState<boolean>(isModalOpen);

  return (
    <>
      {/* idx가 있으면 선불 띄우기 */}
      {openModal && <PreypaymentModal />}

      {isTeacherHome ? <TeacherHome /> : <ParentsHome />}
    </>
  );
}
