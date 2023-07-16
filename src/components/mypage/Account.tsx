import React from "react";
import styled from "styled-components";

export default function Account() {
  return (
    <>
      <Wrapper>
        <TitleWrapper>
          <TitleText>계정</TitleText>
        </TitleWrapper>
        <ContentWrapper>
          <ContentText>로그아웃</ContentText>
          <ContentText>삭제</ContentText>
        </ContentWrapper>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;

  width: 32rem;
  height: 15.8rem;
`;

const TitleWrapper = styled.header`
  display: flex;
  align-items: center;

  height: 2.6rem;

  background-color: ${({ theme }) => theme.colors.grey20};
`;

const TitleText = styled.h1`
  ${({ theme }) => theme.fonts.body04};
  color: ${({ theme }) => theme.colors.grey600};

  margin-left: 1.4rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 2.8rem;

  flex-direction: column;

  height: 13.2rem;
  margin-left: 1.4rem;
`;

const ContentText = styled.h2`
  ${({ theme }) => theme.fonts.body02};
  color: ${({ theme }) => theme.colors.grey900};
`;
