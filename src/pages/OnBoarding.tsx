import FirstSwiper from "../components/OnBoarding/FirstSwiper";
import SecondSwiper from "../components/OnBoarding/SecondSwiper";
import ThirdSwiper from "../components/OnBoarding/ThirdSwiper";
import FourthSwiper from "../components/OnBoarding/FourthSwiper";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { SLIDER_SETTINGS } from "../core/OnBoarding";
import { styled } from "styled-components";
import RoundBottomButton from "../components/common/RoundBottomButton";
import { Link } from "react-router-dom";

export default function OnBoarding() {
  const SwiperPages = [<FirstSwiper />, <SecondSwiper />, <ThirdSwiper />, <FourthSwiper />];

  return (
    <>
      <OnBoardingWrapper>
        <SliderWrapper>
          <Slider {...SLIDER_SETTINGS}>
            {SwiperPages.map((page, idx) => {
              return <article key={idx}>{page}</article>;
            })}
          </Slider>
        </SliderWrapper>

        <ButtonWrapper>
          <RoundBottomButton buttonMessage="시작하기" />
        </ButtonWrapper>

        <GoToLoginMessage>
          이미 계정이 있으신가요? 바로&nbsp;<Link to="/login">로그인 하기</Link>
        </GoToLoginMessage>
      </OnBoardingWrapper>
    </>
  );
}

const OnBoardingWrapper = styled.main`
  width: 100%;

  position: relative;
`;

const SliderWrapper = styled.section`
  margin-bottom: 5.863rem;

  & > .slick-slider > .slick-dots {
    bottom: -2.863rem;
  }

  & > .slick-slider > .slick-dots > li {
    width: 0.8rem;
    height: 0.8rem;
    margin-right: 0.7rem;
  }

  & > .slick-slider > .slick-dots > li > button {
    width: 0.8rem;
    height: 0.8rem;
  }

  & > .slick-slider > .slick-dots > li > button::before {
    width: 0.8rem;
    height: 0.8rem;

    opacity: 1;

    color: ${({ theme }) => theme.colors.grey200};
  }

  & > .slick-slider > .slick-dots > .slick-active > button::before {
    opacity: 1;

    color: ${({ theme }) => theme.colors.green5};
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const GoToLoginMessage = styled.p`
  margin-top: 2rem;

  display: flex;
  justify-content: center;

  ${({ theme }) => theme.fonts.body02};

  color: #7c7e7e;

  > a {
    color: ${({ theme }) => theme.colors.green5};
  }
`;
