import { styled } from "styled-components";

interface SignupTitleLayoutProp {
  MainText: string;
}

export default function SignupTitleLayout(prop: SignupTitleLayoutProp) {
  const { MainText } = prop;
  return <Title>{MainText}</Title>;
}
const Title = styled.header`
  color: ${({ theme }) => theme.colors.grey900};
  ${({ theme }) => theme.fonts.title01};

  white-space: pre-wrap;
`;
