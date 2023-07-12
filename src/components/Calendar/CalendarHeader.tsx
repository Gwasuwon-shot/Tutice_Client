import React from "react";
import styled from "styled-components";

export default function CalendarHeader() {
  return (
    <>
      <HeaderWrapper>
        캘린더로 일정 확인하기
        <ConfirmButton>확인</ConfirmButton>
      </HeaderWrapper>
    </>
  );
}

const HeaderWrapper = styled.section`
  display: flex;
  align-items: center;

  gap: 5.6rem;

  margin-bottom: 1.2rem;
  ${({ theme }) => theme.fonts.body02};
`;

const ConfirmButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.colors.green5};
`;
