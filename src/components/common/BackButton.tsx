import React from "react";
import { backButtonSignupIc } from "../../assets";
import { styled } from "styled-components";

export default function BackButton() {
  return (
    <>
      <BackButtonSignupIcon />
    </>
  );
}
const BackButtonSignupIcon = styled(backButtonSignupIc)`
  width: 1.7rem;
  height: 1.7rem;
  margin-top: 0.77rem;
  margin-left: 1.6rem;
`;
