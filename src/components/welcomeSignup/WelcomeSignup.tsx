import { useState } from "react";
import { styled } from "styled-components";
import AfterSignup from "./AfterSignup";
import AlertSignup from "./AlertSignup";

export default function WelcomeSignup() {
  const [isWelcome, setIsWelcome] = useState<boolean>(true);
  return (
    <>
      <Container>{isWelcome ? <AfterSignup setIsWelcome={setIsWelcome} /> : <AlertSignup />}</Container>
    </>
  );
}

const Container = styled.div`
  display: flex;

  margin-left: 1.8rem;

  white-space: pre-line;
`;
