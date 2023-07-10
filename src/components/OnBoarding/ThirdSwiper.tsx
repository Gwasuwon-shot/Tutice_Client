import { styled } from "styled-components";
import SwiperTitleLayout from "./SwiperTitleLayout";
import { ThirdSwiperFirstTree, ThirdSwiperGradation, ThirdSwiperSecondTree, ThirdSwiperThirdTree } from "../../assets";

const ThirdSwiper = () => {
  const MAIN_TITLE_MESSAGE = "Simple";
  const SUB_TITLE_MESSAGE = "과외를 위한 모든 과정을 한 번에 \n 쉽고, 간편하게";

  return (
    <>
      <ThirdSwiperWrapper>
        <ThirdSwiperGradation />
        <ContentWrapper>
          <SwiperTitleLayout mainTitleContent={MAIN_TITLE_MESSAGE} subTitleContent={SUB_TITLE_MESSAGE} />
          <LogoWrapper>
            <ThirdSwiperFirstTree />
            <ThirdSwiperSecondTree />
            <ThirdSwiperThirdTree />
          </LogoWrapper>
        </ContentWrapper>
      </ThirdSwiperWrapper>
    </>
  );
};

const ThirdSwiperWrapper = styled.article`
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  position: absolute;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-self: center;

  width: 100%;
  margin-top: 6.4rem;
`;

export default ThirdSwiper;
