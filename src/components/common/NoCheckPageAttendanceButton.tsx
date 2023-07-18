import React from "react";
import { styled } from "styled-components";

export default function NoCheckPageAttendanceButton() {
  return (
    <AttendaceCheckButtonBox type="button">
      <h1>출결 체크</h1>
    </AttendaceCheckButtonBox>
  );
}

const AttendaceCheckButtonBox = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 7.2rem;
  height: 3rem;

  border: 1px solid ${({ theme }) => theme.colors.green4};
  background-color: ${({ theme }) => theme.colors.green5};
  color: ${({ theme }) => theme.colors.grey0};
  border-radius: 1rem;
  ${({ theme }) => theme.fonts.body03};

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.green6};
    background-color: ${({ theme }) => theme.colors.green10};
  }
`;
