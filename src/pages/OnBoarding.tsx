import FirstSwiper from "../components/OnBoarding/FirstSwiper";
import SecondSwiper from "../components/OnBoarding/SecondSwiper";
import ThirdSwiper from "../components/OnBoarding/ThirdSwiper";
import FourthSwiper from "../components/OnBoarding/FourthSwiper";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { SLIDER_SETTINGS } from "../core/OnBoarding";
import { styled } from "styled-components";

export default function OnBoarding() {
  const SwiperPages = [<FirstSwiper />, <SecondSwiper />, <ThirdSwiper />, <FourthSwiper />];

  return (
    <SliderWrapper>
      <Slider {...SLIDER_SETTINGS}>
        {SwiperPages.map((page, idx) => {
          return <article key={idx}>{page}</article>;
        })}
      </Slider>
    </SliderWrapper>
  );
}

const SliderWrapper = styled.section`
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
