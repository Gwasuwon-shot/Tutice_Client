import { useEffect, useState } from "react";
import { styled } from "styled-components";
import AfterSignup from "./AfterSignup";
import AlertSignup from "./AlertSignup";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { stepNum } from "../../atom/signup/signup";

export default function WelcomeLayout() {
  const [isWelcome, setIsWelcome] = useState<boolean>(true);
  const setStep = useSetRecoilState(stepNum);

  // useEffect(() => {
  //   setStep(1);
  // }, []);

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
