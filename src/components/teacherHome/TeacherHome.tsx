import { useState } from "react";
import { useRecoilState } from "recoil";
import { styled } from "styled-components";
import { isModalOpen } from "../../atom/common/isModalOpen";
import BasicSingleModal from "../common/BasicSingleModal";
import Header from "../common/Header";
import TeacherFooter from "../common/TeacherFooter";
import AlarmNUpcomingClass from "./AlarmNUpcomingClass";
import NoClassHome from "./NoClassHome";
import WelcomeNUpPreviewBanner from "./WelcomeNUpPreviewBanner";

export default function TeacherHome() {
  // 수업이 존재는 하는지에 대한 데이터 패칭
  const [isClassExist, setIsClassExist] = useState(false);

  const [openModal, setOpenModal] = useRecoilState<boolean>(isModalOpen);

  function handleModalClose() {
    setOpenModal(false);
  }

  return (
    <>
      {openModal && (
        <BasicSingleModal buttonName="확인" handleClickSingleButton={handleModalClose}>
          <h1>출결 누락 알림</h1>
          <p>어쩌구저쩌구</p>
        </BasicSingleModal>
      )}
      <TeacherHomeWrapper>
        <Header />
        {isClassExist ? (
          <>
            <WelcomeNUpPreviewBanner />
            <AlarmNUpcomingClass />
          </>
        ) : (
          <NoClassHome />
        )}
      </TeacherHomeWrapper>
      <TeacherFooter />
    </>
  );
}

const TeacherHomeWrapper = styled.div`
  margin: 0 1.4rem;
`;
