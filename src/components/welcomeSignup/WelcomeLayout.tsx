import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { styled } from "styled-components";
import { userRoleData } from "../../atom/loginUser/loginUser";
import { stepNum } from "../../atom/signup/signup";
import AfterSignup from "./AfterSignup";
import AlertSignup from "./AlertSignup";
import { useNavigate } from "react-router-dom";

export default function WelcomeLayout() {
  const navigate = useNavigate();
  const userRole = useRecoilValue(userRoleData);
  const [isWelcome, setIsWelcome] = useState<boolean>(true);
  const setStep = useSetRecoilState(stepNum);

  useEffect(() => {
    userRole !== "선생님" && setIsWelcome(true);
  }, []);

  async function checkAlarmAlertShow() {
    const permission = await Notification.requestPermission();

    if (permission == "granted") {
      // 알림 허용 x
      // navigate("/home");
      <AlertSignup setIsWelcome={setIsWelcome} />;
    } else {
      return !isWelcome && <AfterSignup setIsWelcome={setIsWelcome} />;
    }
  }
  checkAlarmAlertShow();

  return (
    <>
      <Container>
        {!isWelcome ? <AfterSignup setIsWelcome={setIsWelcome} /> : <AlertSignup setIsWelcome={setIsWelcome} />}
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;

  white-space: pre-line;
`;
