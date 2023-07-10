import React from "react";
import { styled } from "styled-components";
import { MainLogo, TuticeTitleLogo } from "../../assets";

const FirstSwiper = () => {
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
};

const FirstSwiperWrapper = styled.article`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

const TitleWrapper = styled.div`
  margin-top: 3.989rem;
`;

const FirstSwiperTitle = styled.h1`
  display: inline-block;
  font-size: ${({ theme }) => theme.fonts.title01};
`;

const FirstSwiperTitleKeyword = styled(FirstSwiperTitle)`
  color: ${({ theme }) => theme.colors.green5};
`;

const IconWrapper = styled.div`
  margin-top: 1.008rem;

  display: flex;
  align-items: center;
  gap: 0.663rem;
`;

export default FirstSwiper;
