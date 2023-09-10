import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { styled } from "styled-components";
import { stepNum } from "../../atom/signup/signup";
import AfterSignup from "./AfterSignup";
import AlertSignup from "./AlertSignup";

export default function WelcomeLayout() {
  const [isWelcome, setIsWelcome] = useState<boolean>(true);
  const setStep = useSetRecoilState(stepNum);

  return (
    <>
      <Container>
        {isWelcome ? <AfterSignup setIsWelcome={setIsWelcome} /> : <AlertSignup setIsWelcome={setIsWelcome} />}
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;

  white-space: pre-line;
`;
