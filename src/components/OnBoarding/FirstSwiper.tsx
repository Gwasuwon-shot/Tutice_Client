import React from "react";
import { styled } from "styled-components";
import { AppleOnBoardingIc, LogoOnBoardingIc, MainLogo, TuticeTitleLogo } from "../../assets";

export default function FirstSwiper() {
  return (
    <>
      <FirstSwiperContainer>
        <FirstSwiperWrapper>
          <LogoWrapper>
            <LogoOnBoardingIc />
          </LogoWrapper>
          <TitleWrapper>
            <FirstSwiperTitle>
              쉬운 수업 관리로 열리는 <br /> 정확한 나의 <FirstSwiperTitleKeyword> 결실</FirstSwiperTitleKeyword>,
            </FirstSwiperTitle>
          </TitleWrapper>
          <SubTitle>
            과외 수업을 위한 <br />
            원클릭 수업 통합 관리 서비스
          </SubTitle>

          <AppleWrapper>
            <AppleOnBoardingIc />
          </AppleWrapper>
        </FirstSwiperWrapper>
      </FirstSwiperContainer>
    </>
  );
}
const FirstSwiperContainer = styled.div`
  position: relative;
  height: 36.9rem;
  background-color: ${({ theme }) => theme.colors.green1};
`;

const FirstSwiperWrapper = styled.article`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-left: 1.4rem;
`;

const LogoWrapper = styled.div`
  margin-top: 3.5rem;
  margin-bottom: 3.2rem;
`;

const TitleWrapper = styled.div``;

const FirstSwiperTitle = styled.h1`
  display: inline-block;

  font-size: ${({ theme }) => theme.fonts.title01};
`;

const FirstSwiperTitleKeyword = styled.p`
  display: inline-block;

  font-size: ${({ theme }) => theme.fonts.title01};

  color: ${({ theme }) => theme.colors.red6};
`;

const SubTitle = styled.p`
  margin-top: 1.08rem;

  font-size: ${({ theme }) => theme.fonts.body04};

  color: ${({ theme }) => theme.colors.grey600};
`;

const AppleWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;
