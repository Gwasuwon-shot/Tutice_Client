import React from "react";
import { styled } from "styled-components";

interface TextLabelLayoutProps {
  labelText: string;
}

export default function TextLabelLayout(props: TextLabelLayoutProps) {
  const { labelText } = props;
  return <Label> {labelText} </Label>;
}

const Label = styled.span`
  color: ${({ theme }) => theme.colors.grey300};
  ${({ theme }) => theme.fonts.body04};
`;
