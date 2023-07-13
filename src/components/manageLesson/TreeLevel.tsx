import { useRecoilState } from "recoil";
import { managingStatus } from "../../atom/mangeLesson/managingStatus";
import WelcomeTreeLevel from "./WelcomeTreeLevel.tsx";

export default function TreeLevel() {
  const [status, setStatus] = useRecoilState(managingStatus);

  return (
    <>
      <WelcomeTreeLevel />
    </>
  );
}
