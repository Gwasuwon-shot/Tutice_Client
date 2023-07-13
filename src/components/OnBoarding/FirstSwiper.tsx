import React from "react";
import { styled } from "styled-components";
import { MainLogo, TuticeTitleLogo } from "../../assets";

export default function FirstSwiper() {
  return (
    <>
      <FirstSwiperWrapper>
        <TitleWrapper>
          <FirstSwiperTitle>
            쉬운 수업 관리로 열리는 <br /> 정확한 나의 <FirstSwiperTitleKeyword> 결실</FirstSwiperTitleKeyword>,
          </FirstSwiperTitle>
        </TitleWrapper>
        <IconWrapper>
          <MainLogo />
          <TuticeTitleLogo />
        </IconWrapper>
      </FirstSwiperWrapper>
    </>
  );
}

const FirstSwiperWrapper = styled.article`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-left: 1.4rem;
`;

const TitleWrapper = styled.div`
  margin-top: 3.989rem;
`;

const FirstSwiperTitle = styled.h1`
  display: inline-block;

  font-size: ${({ theme }) => theme.fonts.title01};
`;

const FirstSwiperTitleKeyword = styled.p`
  display: inline-block;

  font-size: ${({ theme }) => theme.fonts.title01};

  color: ${({ theme }) => theme.colors.green5};
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;

  margin-top: 1.008rem;
  gap: 0.663rem;
`;
