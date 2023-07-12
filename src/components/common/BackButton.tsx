import React from "react";
import { backButtonSignupIc } from "../../assets";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();

  function handleMoveToBack() {
    navigate(-1);
  }

  return (
    <>
      <BackButtonSignupIcon onClick={handleMoveToBack} />
    </>
  );
}
const BackButtonSignupIcon = styled(backButtonSignupIc)`
  width: 1.7rem;
  height: 1.7rem;
  margin-top: 0.77rem;
  margin-left: 1.6rem;
`;
