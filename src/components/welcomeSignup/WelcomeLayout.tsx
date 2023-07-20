import { useState } from "react";
import { styled } from "styled-components";
import AfterSignup from "./AfterSignup";
import AlertSignup from "./AlertSignup";

export default function WelcomeLayout() {
  const [isWelcome, setIsWelcome] = useState<boolean>(true);
  return (
    <>
      <Container>{isWelcome ? <AfterSignup setIsWelcome={setIsWelcome} /> : <AlertSignup />}</Container>
    </>
  );
}

const Container = styled.div`
  display: flex;

  white-space: pre-line;
`;
