import React, { ReactNode, useState } from "react";
import { styled } from "styled-components";

type BottomButtonProps = {
  children: ReactNode;
  isactive: Boolean;
};

export default function BottomButton({ children, isactive }: BottomButtonProps) {
  return (
    <BottomContainer isactive={isactive}>
      <BottomText> {children} </BottomText>
    </BottomContainer>
  );
}

const BottomContainer = styled.button<{ isactive: Boolean }>`
  position: fixed;
  bottom: 0;

  width: 31.8rem;
  height: 6.3rem;
  margin-left: -1.6rem;

  background-color: ${({ theme, isactive }) => (isactive ? theme.colors.green5 : theme.colors.grey50)};
  color: ${({ theme, isactive }) => (isactive ? theme.colors.grey0 : theme.colors.grey200)};
`;

const BottomText = styled.div`
  position: relative;

  /* top- 정확한 값으로 수정 필요 */
  top: -1rem;
  ${({ theme }) => theme.fonts.body01};
`;
