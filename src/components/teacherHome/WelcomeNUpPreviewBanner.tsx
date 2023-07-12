import { useState } from "react";
import { useRecoilState } from "recoil";
import { styled } from "styled-components";
import { isModalOpen } from "../../atom/common/isModalOpen";
import { YES_TODAY_CLASS_BEFORE_CLASS_BANNER } from "../../core/teacherHome/teacherHome";
import AttendanceCheckModal from "../common/AttendanceCheckModal";
import PreviewBanner from "./PreviewBanner";
import WelcomeTeacher from "./WelcomeTeacher";

export default function WelcomeNUpcomingBanner() {
  const { teacherName, isTodaySchedule, todaySchedule } = YES_TODAY_CLASS_BEFORE_CLASS_BANNER.data;
  const [openModal, setOpenModal] = useRecoilState<boolean>(isModalOpen);
  const [isCheckingModalOpen, setIsCheckingModalOpen] = useState(false);

  return (
    <>
      {openModal && (
        <ModalSection>
          <AttendanceCheckModal setIsCheckingModalOpen={setIsCheckingModalOpen} todaySchedule={todaySchedule} />
        </ModalSection>
      )}
      <WelcomeTeacher teacherName={teacherName} isTodaySchedule={isTodaySchedule} todaySchedule={todaySchedule} />
      <PreviewBanner isTodaySchedule={isTodaySchedule} todaySchedule={todaySchedule} />
    </>
  );
}

const ModalSection = styled.section`
  position: absolute;

  /* z-index: 5; */

  margin: -4rem 0 0 -1.5em;
`;
