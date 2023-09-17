import Role from "./Role";
import NameEmail from "./NameEmail";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { stepNum } from "../../atom/signup/signup";
import AgreeCheckingFrame from "./AgreeCheckingFrame";
import PasswordFrame from "./PasswordFrame";

export default function StepRenderer() {
  const step = useRecoilValue(stepNum);
  const navigate = useNavigate();
  switch (step) {
    case 0:
      navigate(-1);
      break;
    case 1:
      return <Role />;
    case 2:
      return <AgreeCheckingFrame />;
    case 3:
      return <NameEmail />;
    case 4:
      return <PasswordFrame />;
  }
}
