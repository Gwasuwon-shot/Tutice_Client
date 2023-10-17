import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { styled } from "styled-components";
import { userRoleData } from "../../atom/loginUser/loginUser";
import { useNavigate } from "react-router-dom";

export default function WelcomeLayout() {
  const navigate = useNavigate();
  const userRole = useRecoilValue(userRoleData);

  useEffect(() => {
    if (userRole !== "선생님") {
      checkAlarmAlertShow();
    }
  }, []);

  async function checkAlarmAlertShow() {
    const permission = await Notification.requestPermission();

    if (permission == "granted" || permission == "denied") {
      navigate("/alert");
    } else {
      navigate("/tree");
    }
  }
  checkAlarmAlertShow();

  return (
    <>
      <Container>
        {/* {!isWelcome ? <AfterSignup setIsWelcome={setIsWelcome} /> : <AlertSignup setIsWelcome={setIsWelcome} />} */}
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;

  white-space: pre-line;
`;
