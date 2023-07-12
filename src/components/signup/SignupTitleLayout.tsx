import React from "react";
import { styled } from "styled-components";

interface SignupTitleLayoutProps {
  MainText: string;
}

export default function SignupTitleLayout(props: SignupTitleLayoutProps) {
  const { MainText } = props;
  return <Title>{MainText}</Title>;
}
const Title = styled.header`
  color: ${({ theme }) => theme.colors.grey900};
  ${({ theme }) => theme.fonts.title01};
`;
