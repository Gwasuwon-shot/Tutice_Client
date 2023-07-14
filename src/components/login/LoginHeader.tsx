import React from "react";
import { styled } from "styled-components";
import { tuticeWithTextCommonIc } from "../../assets";

export default function LoginHeader() {
  return (
    <div>
      <TuticeWithTextCommonIcon />
    </div>
  );
}

const TuticeWithTextCommonIcon = styled(tuticeWithTextCommonIc)`
  width: 16.6rem;
  height: 5.5rem;
  flex-shrink: 0;
`;
