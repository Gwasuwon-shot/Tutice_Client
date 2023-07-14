import { styled } from "styled-components";

interface RegexFieldProp {
  unMatchText: string;
}

export default function RegexField(prop: RegexFieldProp) {
  const { unMatchText } = prop;
  return <RegexText>{unMatchText}</RegexText>;
}

const RegexText = styled.p`
  margin-top: 0.5rem;
  margin-left: 0.2rem;

  color: ${({ theme }) => theme.colors.semantic_red};

  ${({ theme }) => theme.fonts.body06};
`;
