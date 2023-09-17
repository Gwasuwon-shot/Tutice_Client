import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import StepRenderer from "../components/signup/StepRenderer";
import { isCookieAuthenticated, isCookieNull, isLogin } from "../utils/common/isLogined";
import { stepNum } from "../atom/signup/signup";

export default function Signup() {
  const navigate = useNavigate();

  const LoginChecked = isLogin() || isCookieNull() || isCookieAuthenticated();

  const setStep = useSetRecoilState(stepNum);

  useEffect(() => {
    if (LoginChecked) {
      navigate("/home");
    } else {
      setStep(1);
    }
  }, [LoginChecked]);

  return <div>{LoginChecked ? null : <StepRenderer />}</div>;
}
