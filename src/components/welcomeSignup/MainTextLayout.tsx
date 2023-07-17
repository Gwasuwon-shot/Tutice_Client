import React from "react";
import { styled } from "styled-components";

interface MainTextLayoutprop {
  mainText: string;
}

export default function MainTextLayout(prop: MainTextLayoutprop) {
  const { mainText } = prop;
  return;
  <MainText>{mainText}</MainText>;
}

const MainText = styled.p`
  margin-bottom: 2.2rem;

  color: ${({ theme }) => theme.colors.grey900};

  ${({ theme }) => theme.fonts.title01};
`;
