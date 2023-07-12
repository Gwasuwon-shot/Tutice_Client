import { useState } from "react";
import { useRecoilState } from "recoil";
import { styled } from "styled-components";
import { isModalOpen } from "../../atom/common/isModalOpen";
import Header from "../common/Header";
import TeacherFooter from "../common/TeacherFooter";
import ToastModal from "../common/ToastModal";
import AlarmNUpcomingClass from "./AlarmNUpcomingClass";
import NoClassHome from "./NoClassHome";
import WelcomeNUpPreviewBanner from "./WelcomeNUpPreviewBanner";

export default function TeacherHome() {
  // 수업이 존재는 하는지에 대한 데이터 패칭
  const [isClassExist, setIsClassExist] = useState(false);

  const [openModal, setOpenModal] = useRecoilState<boolean>(isModalOpen);

  return (
    <>
      {openModal && (
        <ToastModal>
          <h1>안녕하세요</h1>
          <h1>안녕하세요</h1>
          <h1>안녕하세요</h1>
          <h1>안녕하세요</h1>
          <h1>안녕하세요</h1>
          <h1>안녕하세요</h1>
          <h1>안녕하세요</h1>
          <h1>안녕하세요</h1>
          <h1>안녕하세요</h1>
          <h1>안녕하세요</h1>
          <h1>안녕하세요</h1>
          <h1>안녕하세요</h1>
          <h1>안녕하세요</h1>
          <h1>안녕하세요</h1>
          <h1>안녕하세요</h1>
          <h1>안녕하세요</h1>
          <h1>안녕하세요</h1>
          <h1>안녕하세요</h1>
          <h1>안녕하세요</h1>
          <h1>안녕하세요</h1>
          <h1>안녕하세요</h1>
          <h1>안녕하세요</h1>
          <h1>안녕하세요</h1>
          <h1>안녕하세요</h1>
          <h1>안녕하세요</h1>
          <h1>안녕하세요</h1>
          <h1>안녕하세요</h1>
          <h1>안녕하세요</h1>
          <h1>안녕하세요</h1>
          <h1>안녕하세요</h1>
          <h1>안녕하세요</h1>
          <h1>안녕하세요</h1>
          <h1>안녕하세요</h1>
          <h1>안녕하세요</h1>
          <h1>안녕하세요</h1>
          <h1>안녕하세요</h1>
        </ToastModal>
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
