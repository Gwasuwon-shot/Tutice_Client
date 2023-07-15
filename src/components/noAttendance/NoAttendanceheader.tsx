import React from "react";
import styled from "styled-components";
import { backButtonSignupIc } from "../../assets/index";
import { useNavigate } from "react-router-dom";

export default function NoAttendanceheader() {
  const navigate = useNavigate();

  function handleBackToPage() {
    navigate("/");
  }

  return (
    <HeaderWrapper>
      <HeaderBackButton onClick={handleBackToPage} />
      <HeaderName>놓친 출결</HeaderName>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;

  margin-right: 1.4rem;
  margin-left: 1.4rem;

  gap: 0.8rem;
`;

const HeaderBackButton = styled(backButtonSignupIc)`
  width: 4rem.;
  height: 4rem;
`;

const HeaderName = styled.h1`
  ${({ theme }) => theme.fonts.title01};
  color: ${({ theme }) => theme.colors.grey900};
`;
