import { styled } from "styled-components";

interface TextLabelLayoutProp {
  labelText: string | undefined;
}

export default function TextLabelLayout(prop: TextLabelLayoutProp) {
  const { labelText } = prop;
  return <Label> {labelText} </Label>;
}

const Label = styled.span`
  color: ${({ theme }) => theme.colors.grey300};
  ${({ theme }) => theme.fonts.body04};
`;
