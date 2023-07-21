import { styled } from "styled-components";
import PreviewBanner from "./PreviewBanner";
import WelcomeTeacher from "./WelcomeTeacher";

export default function WelcomeNUpcomingBanner() {
  // const [openModal, setOpenModal] = useRecoilState<boolean>(isModalOpen);
  // const [isCheckingModalOpen, setIsCheckingModalOpen] = useState(false);

  return (
    <>
      {/* {openModal && isCheckingModalOpen && (
        <ModalSection $isCheckingModalOpen={isCheckingModalOpen}>
          <AttendanceDoubleCheckingModal setIsCheckingModalOpen={setIsCheckingModalOpen} />
        </ModalSection>
      )}
      {openModal && (
        <ModalSection $isCheckingModalOpen={isCheckingModalOpen}>
          <AttendanceCheckModal setIsCheckingModalOpen={setIsCheckingModalOpen} />
        </ModalSection>
      )} */}
      <WelcomeTeacher />
      <PreviewBanner />
    </>
  );
}

const ModalSection = styled.section<{ $isCheckingModalOpen: boolean }>`
  position: absolute;

  margin: -4rem 0 0 -1.5em;
`;
