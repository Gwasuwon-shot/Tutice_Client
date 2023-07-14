import React from "react";
import { styled } from "styled-components";

export default function AccountManaging() {
  return (
    <Container>
      <TextWrapper>
        <AText>아이디 찾기</AText>
        <VerticalLine />
        <AText>비밀번호 찾기</AText>
        <VerticalLine />
        <AText>회원가입</AText>
      </TextWrapper>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 1.6rem;
`;

const TextWrapper = styled.div`
  display: flex;
  row-gap: 0.8rem;

  color: ${({ theme }) => theme.colors.grey600};
  ${({ theme }) => theme.fonts.body06};
`;

const VerticalLine = styled.div`
  width: 0;
  height: 1rem;

  border-right: 0.0725px solid ${({ theme }) => theme.colors.grey300};
`;

const AText = styled.p`
  margin: 0 0.8rem;
`;
