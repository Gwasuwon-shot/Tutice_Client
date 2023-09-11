import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { styled } from "styled-components";
import { userRoleData } from "../../atom/loginUser/loginUser";
import { stepNum } from "../../atom/signup/signup";
import AfterSignup from "./AfterSignup";
import AlertSignup from "./AlertSignup";

export default function WelcomeLayout() {
  const userRole = useRecoilValue(userRoleData);
  const [isWelcome, setIsWelcome] = useState<boolean>(true);
  const setStep = useSetRecoilState(stepNum);

  useEffect(() => {
    userRole !== "선생님" && setIsWelcome(true);
  }, []);

  function checkAlarmAlertShow() {
    console.log(window.Notification);
    if (window.Notification) {
      // 알림 허용 x
      return <AlertSignup setIsWelcome={setIsWelcome} />;
    } else {
      return !isWelcome && <AfterSignup setIsWelcome={setIsWelcome} />;
    }
  }

  return (
    <>
      <Container>{!isWelcome ? <AfterSignup setIsWelcome={setIsWelcome} /> : <> {checkAlarmAlertShow()}</>}</Container>
    </>
  );
}

const Container = styled.div`
  display: flex;

  white-space: pre-line;
`;
