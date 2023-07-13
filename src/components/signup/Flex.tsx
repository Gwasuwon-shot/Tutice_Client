import React from "react";
import { styled } from "styled-components";

export const conventionSelectedCheck = [
  { id: 0, selected: false },
  { id: 1, selected: false },
  { id: 2, selected: false },
  { id: 3, selected: false },
];
export default function Flex() {
  return;
  // <Container>{conventionSelectedCheck.map((id, selected) => (

  // ))}</Container>;
}

const Container = styled.div`
  display: flex;
  border-radius: 0.8rem;

  border: 1px solid ${({ theme }) => theme.colors.grey70};
  background: ${({ theme }) => theme.colors.grey0};
`;

const CheckBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
