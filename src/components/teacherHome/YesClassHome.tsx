import { useRecoilState } from "recoil";
import { styled } from "styled-components";
import { isModalOpen } from "../../atom/common/isModalOpen";
import AttendanceCheckModal from "../common/AttendanceCheckModal";
import AlarmNUpcomingClass from "./AlarmNUpcomingClass";
import WelcomeNUpPreviewBanner from "./WelcomeNUpPreviewBanner";

export default function YesClassHome() {
  const [openModal, setOpenModal] = useRecoilState<boolean>(isModalOpen);

  return (
    <>
      <ModalSection>
        <AttendanceCheckModal />
      </ModalSection>
      <WelcomeNUpPreviewBanner />
      <AlarmNUpcomingClass />
    </>
  );
}

const ModalSection = styled.section`
  position: absolute;

  margin: -4rem 0 0 -1.5em;
`;
