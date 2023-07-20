import ParentsHome from "../components/parentsHome/ParentsHome";
import PreypaymentModal from "../components/modal/PreypaymentModal";
import TeacherHome from "../components/teacherHome/TeacherHome";
import { isModalOpen } from "../atom/common/isModalOpen";
import { useRecoilState } from "recoil";
import { useState } from "react";

export default function Home() {
  const [isTeacherHome, setIsTeacherHome] = useState(true);
  const [openModal, setOpenModal] = useRecoilState<boolean>(isModalOpen);

  return (
    <>
      {/* idx가 있으면 선불 띄우기 */}
      {openModal && <PreypaymentModal />}

      {isTeacherHome ? <TeacherHome /> : <ParentsHome />}
    </>
  );
}
