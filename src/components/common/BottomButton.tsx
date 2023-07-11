import React, { ReactNode, useState } from "react";
import { styled } from "styled-components";

interface BottomButtonProps {
  children: ReactNode;
  isactive: Boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function BottomButton(props: BottomButtonProps) {
  const { children, isactive, onClick } = props;
  return (
    <BottomContainer isactive={isactive} onClick={onClick}>
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
