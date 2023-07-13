import { useRecoilState } from "recoil";
import { managingStatus } from "../../atom/mangeLesson/managingStatus";

export default function TreeLevel() {
  const [status, setStatus] = useRecoilState(managingStatus);

  return <div>TreeLevel</div>;
}
