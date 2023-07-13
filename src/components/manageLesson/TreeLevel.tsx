import { useRecoilState } from "recoil";
import { managingStatus } from "../../atom/mangeLesson/managingStatus";
import WaitingFruits from "./WaitingFruits";

export default function TreeLevel() {
  const [status, setStatus] = useRecoilState(managingStatus);

  return (
    <>
      <WaitingFruits leftCount={4} />
    </>
  );
}
