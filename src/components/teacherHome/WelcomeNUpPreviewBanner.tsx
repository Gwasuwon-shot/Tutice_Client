import { useState } from "react";
import { useRecoilState } from "recoil";
import { styled } from "styled-components";
import { upcomingClassData } from "../../atom/attendanceCheck/upcomingClassData";
import { isModalOpen } from "../../atom/common/isModalOpen";
import AttendanceCheckModal from "../common/AttendanceCheckModal";
import AttendanceDoubleCheckingModal from "./AttendanceDoubleCheckingModal";
import PreviewBanner from "./PreviewBanner";
import WelcomeTeacher from "./WelcomeTeacher";

export default function WelcomeNUpcomingBanner() {
  const [classData, setclassData] = useRecoilState(upcomingClassData);
  const { teacherName, isTodaySchedule, todaySchedule } = classData;
  const [openModal, setOpenModal] = useRecoilState<boolean>(isModalOpen);
  const [isCheckingModalOpen, setIsCheckingModalOpen] = useState(false);

  return (
    <>
      {openModal && isCheckingModalOpen && (
        <ModalSection $isCheckingModalOpen={issCheckingModalOpen}>
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
