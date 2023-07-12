import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { styled } from "styled-components";
import { isModalOpen } from "../../atom/common/isModalOpen";
import BasicDoubleModal from "../common/BasicDoubleModal";
import Header from "../common/Header";
import TeacherFooter from "../common/TeacherFooter";
import AlarmNUpcomingClass from "./AlarmNUpcomingClass";
import NoClassHome from "./NoClassHome";
import WelcomeNUpPreviewBanner from "./WelcomeNUpPreviewBanner";

export default function TeacherHome() {
  // 수업이 존재는 하는지에 대한 데이터 패칭
  const [isClassExist, setIsClassExist] = useState(false);

  const [openModal, setOpenModal] = useRecoilState<boolean>(isModalOpen);

  const navigate = useNavigate();

  function handleModalClose() {
    setOpenModal(false);
  }

  function handleMoveToSchedule() {
    navigate("/schedule");
  }

  return (
    <>
      {openModal && (
        <BasicDoubleModal
          leftButtonName="취소"
          rightButtonName="확인"
          handleClickLeftButton={handleModalClose}
          handleClickRightButton={handleMoveToSchedule}>
          <p>출석으로 체크하시겠어요?</p>
        </BasicDoubleModal>
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
