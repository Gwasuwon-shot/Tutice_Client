import { styled } from "styled-components";
import PreviewBanner from "./PreviewBanner";
import WelcomeTeacher from "./WelcomeTeacher";

export default function WelcomeNUpcomingBanner() {
  return (
    <>
      <WelcomeTeacher />
      <PreviewBanner />
    </>
  );
}

const ModalSection = styled.section<{ $isCheckingModalOpen: boolean }>`
  position: absolute;

  margin: -4rem 0 0 -1.5em;
`;
