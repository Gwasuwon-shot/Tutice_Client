import { useNavigate } from "react-router-dom";
import RoundBottomButton from "./RoundBottomButton";

export default function CreateTreeCode() {
  const navigate = useNavigate();
  function handleMakeTreeCode() {
    navigate("/register-lesson");
  }

  return (
    <div onClick={handleMakeTreeCode}>
      <RoundBottomButton buttonMessage="나무코드 생성하기" />
    </div>
  );
}
