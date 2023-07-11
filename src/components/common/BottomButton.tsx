import React, { ReactNode } from "react";
import { styled } from "styled-components";

type BottomButtonProps = {
  children: ReactNode;
};

export default function BottomButton({ children }: BottomButtonProps) {
  return (
    <BottomContainer>
      <BottomText> {children} </BottomText>
    </BottomContainer>
  );
}

const BottomContainer = styled.button`
  position: fixed;
  bottom: 0;

  width: 32rem;
  height: 6.3rem;
  margin-left: -1.6rem;

  background-color: ${({ theme }) => theme.colors.green5};
`;

const BottomText = styled.div`
  position: relative;

  /* top- 정확한 값으로 수정 필요 */
  top: -1rem;

  color: ${({ theme }) => theme.colors.grey0};
  ${({ theme }) => theme.fonts.body01};
`;
