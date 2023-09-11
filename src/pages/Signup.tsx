import { useNavigate } from "react-router-dom";
import StepRenderer from "../components/signup/StepRenderer";
import { isCookieAuthenticated, isCookieNull, isLogin } from "../utils/common/isLogined";
import { useEffect } from "react";

export default function Signup() {
  const navigate = useNavigate();

  const LoginChecked = isLogin() || isCookieNull() || isCookieAuthenticated();

  useEffect(() => {
    if (LoginChecked) {
      navigate("/home");
    }
  }, [LoginChecked, navigate]);

  return <div>{LoginChecked ? null : <StepRenderer />}</div>;
}
