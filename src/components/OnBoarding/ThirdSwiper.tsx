import { styled } from "styled-components";
import SwiperTitleLayout from "./SwiperTitleLayout";
import { ThirdSwiperFirstTree, ThirdSwiperGradation, ThirdSwiperSecondTree, ThirdSwiperThirdTree } from "../../assets";

const ThirdSwiper = () => {
  const MAIN_TITLE_MESSAGE = "Simple";
  const SUB_TITLE_MESSAGE = "과외를 위한 모든 과정을 한 번에 \n 쉽고, 간편하게";

  return (
    <>
      <ThirdSwiperWrapper>
        <SwiperTitleLayout mainTitleContent={MAIN_TITLE_MESSAGE} subTitleContent={SUB_TITLE_MESSAGE} />
        <LogoWrapper>
          <ThirdSwiperFirstTree />

          <SecondTreeWrapper>
            <ThirdSwiperSecondTree />
          </SecondTreeWrapper>

          <ThirdTreeWrapper>
            <ThirdSwiperThirdTree />
          </ThirdTreeWrapper>
        </LogoWrapper>
      </ThirdSwiperWrapper>
    </>
  );
};

const ThirdSwiperWrapper = styled.div`
  display: flex;
  flex-direction: column;

  position: absolute;
  bottom: 0;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: flex-end;

  width: 100%;
  margin-top: 6.4rem;

  overflow: hidden;
`;

const SecondTreeWrapper = styled.div`
  margin-right: 1.571rem;
  margin-left: 1.816rem;
`;

const ThirdTreeWrapper = styled.div`
  margin-left: 1.1rem;
`;

export default ThirdSwiper;
