import { styled } from "styled-components";
interface RegexFieldProps {
  unMatchText: string;
}

export default function RegexField(props: RegexFieldProps) {
  const { unMatchText } = props;
  return <RegexText>{unMatchText}</RegexText>;
}

const RegexText = styled.p`
  /* 임시 컬러 ㅠㅠ */
  color: #ec583e;
  ${({ theme }) => theme.fonts.body06};
`;
