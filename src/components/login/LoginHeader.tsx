import React from "react";
import { styled } from "styled-components";
import { tuticeWithTextCommonIc } from "../../assets";
import TextLabelLayout from "../signup/TextLabelLayout";

export default function LoginHeader() {
  const LOGIN_MAIN_TITLE = "쉬운 수업 관리로 열리는 \n 정확한 나의 ";
  const LOGIN_MAIN_TITLE_2 = "결실";

  return (
    <>
      <Title>
        {LOGIN_MAIN_TITLE}
        <Title_2>{LOGIN_MAIN_TITLE_2}</Title_2>
      </Title>
      <div>
        <TuticeWithTextCommonIcon />
      </div>
    </>
  );
}

const Title = styled.p`
  margin-top: 3.3rem;
  margin-bottom: 0.8rem;

  ${({ theme }) => theme.fonts.body02};

  /* 컬러 테마에 추가 */
  color: ${({ theme }) => theme.colors.grey900};

  white-space: pre-line;
`;

const Title_2 = styled.span`
  color: ${({ theme }) => theme.colors.green5};
  ${({ theme }) => theme.fonts.body02};
`;

const TuticeWithTextCommonIcon = styled(tuticeWithTextCommonIc)`
  width: 16.6rem;
  height: 5.5rem;
  margin-bottom: 2.8rem;
  margin-left: -1.4rem;
  flex-shrink: 0;
`;