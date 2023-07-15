import { useState } from "react";
import { useRecoilState } from "recoil";
import { styled } from "styled-components";
import { isModalOpen } from "../../atom/common/isModalOpen";
import useGetTodayScheduleByTeacher from "../../hooks/useGetTodayScheduleByTeacher";
import AttendanceCheckModal from "../common/AttendanceCheckModal";
import AttendanceDoubleCheckingModal from "../common/AttendanceDoubleCheckingModal";
import PreviewBanner from "./PreviewBanner";
import WelcomeTeacher from "./WelcomeTeacher";

export default function WelcomeNUpcomingBanner() {
  const { teacherName, isTodaySchedule, todaySchedule } = useGetTodayScheduleByTeacher();

  const [openModal, setOpenModal] = useRecoilState<boolean>(isModalOpen);
  const [isCheckingModalOpen, setIsCheckingModalOpen] = useState(false);

  return (
    <>
      {openModal && isCheckingModalOpen && (
        <ModalSection $isCheckingModalOpen={isCheckingModalOpen}>
          <AttendanceDoubleCheckingModal setIsCheckingModalOpen={setIsCheckingModalOpen} />
        </ModalSection>
      )}
      {openModal && (
        <ModalSection $isCheckingModalOpen={isCheckingModalOpen}>
          <AttendanceCheckModal setIsCheckingModalOpen={setIsCheckingModalOpen} />
        </ModalSection>
      )}
      <WelcomeTeacher />
      <PreviewBanner />
    </>
  );
}

const ModalSection = styled.section<{ $isCheckingModalOpen: boolean }>`
  position: absolute;

  margin: -4rem 0 0 -1.5em;
`;
