import { useState } from "react";
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

  return (
    <>
      <Container>
        {userRole === "선생님" ? (
          <AfterSignup setIsWelcome={setIsWelcome} />
        ) : (
          <AlertSignup setIsWelcome={setIsWelcome} />
        )}
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;

  white-space: pre-line;
`;
