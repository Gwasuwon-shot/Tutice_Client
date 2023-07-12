import { useState } from "react";
import { useRecoilState } from "recoil";
import { styled } from "styled-components";
import { isModalOpen } from "../../atom/common/isModalOpen";
import AttendanceCheckModal from "../common/AttendanceCheckModal";
import Header from "../common/Header";
import TeacherFooter from "../common/TeacherFooter";
import NoClassHome from "./NoClassHome";
import YesClassHome from "./YesClassHome";

export default function TeacherHome() {
  // 수업이 존재는 하는지에 대한 데이터 패칭
  const [isClassExist, setIsClassExist] = useState(true);
  const [openModal, setOpenModal] = useRecoilState<boolean>(isModalOpen);

  return (
    <>
      <AttendanceCheckModal />
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
