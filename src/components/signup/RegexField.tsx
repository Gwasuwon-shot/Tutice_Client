import { styled } from "styled-components";
interface RegexFieldProps {
  unMatchText: string;
}

export default function RegexField(props: RegexFieldProps) {
  const { unMatchText } = props;
  return <RegexText>{unMatchText}</RegexText>;
}

const RegexText = styled.p`
  margin-left: 0.2rem;
  margin-top: 0.5rem;

  /* 임시 컬러 ㅠㅠ */
  color: ${({ theme }) => theme.colors.semantic_red};

  ${({ theme }) => theme.fonts.body06};
`;
