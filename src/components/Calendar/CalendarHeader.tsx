import React from "react";
import styled from "styled-components";

export default function CalendarHeader() {
  return (
    <>
      <HeaderWrapper>
        <Xbutton>X</Xbutton>
        캘린더로 일정 확인하기
        <ConfirmButton>확인</ConfirmButton>
      </HeaderWrapper>
    </>
  );
}

const HeaderWrapper = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;

  margin-bottom: 1.3rem;
`;

const Xbutton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ConfirmButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
`;
