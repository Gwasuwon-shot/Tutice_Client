import { useState } from "react";
import { styled } from "styled-components";
import AfterSignup from "./AfterSignup";
import AlertSignup from "./AlertSignup";

export default function WelcomeSignup() {
  const [isWelcome, setIsWelcome] = useState(true);
  return <Container>{isWelcome ? <AfterSignup /> : <AlertSignup />}</Container>;
}

const Container = styled.div`
  margin-left: 1.8rem;
`;
