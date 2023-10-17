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

    if (permission == "granted") {
      // 알림 허용 x
      console.log("알림허용안되어있음");
      navigate("/alert");
      // <AllowAlert />;
    } else {
      console.log("알림허용되어있음");
      navigate("/tree");
      // return <AfterSignup />;
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
