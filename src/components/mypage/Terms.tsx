import React from "react";
import styled from "styled-components";

export default function Terms() {
  return (
    <>
      <Wrapper>
        <TitleWrapper>
          <TitleText>약관</TitleText>
        </TitleWrapper>
        <ContentWrapper>
          <ContentText>서비스 이용</ContentText>
          <ContentText>개인정보 수집 및 이용</ContentText>
          <ContentText>개인정보 마케팅 활용</ContentText>
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
  margin-bottom: 1rem;
`;

const TitleWrapper = styled.header`
  display: flex;
  align-items: center;
  height: 2.6rem;

  background-color: ${({ theme }) => theme.colors.grey20};
`;

const TitleText = styled.h1`
  margin-left: 1.4rem;

  ${({ theme }) => theme.fonts.body04};
  color: ${({ theme }) => theme.colors.grey600};
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const ContentText = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1.4rem;
  height: 6rem;
  ${({ theme }) => theme.fonts.body02};
  color: ${({ theme }) => theme.colors.grey900};
  cursor: pointer;
`;
