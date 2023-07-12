import { useRecoilState } from "recoil";
import { isModalOpen } from "../../atom/common/isModalOpen";
import AlarmNUpcomingClass from "./AlarmNUpcomingClass";
import WelcomeNUpPreviewBanner from "./WelcomeNUpPreviewBanner";

export default function YesClassHome() {
  const [openModal, setOpenModal] = useRecoilState<boolean>(isModalOpen);

  return (
    <>
      <WelcomeNUpPreviewBanner />
      <AlarmNUpcomingClass />
    </>
  );
}
