import { styled } from "styled-components";
import { ThirdSwiperFirstTree, ThirdSwiperSecondTree, ThirdSwiperThirdTree } from "../../assets";
import SwiperTitleLayout from "./SwiperTitleLayout";

export default function ThirdSwiper() {
  const MAIN_TITLE_MESSAGE = "Simple";
  const SUB_TITLE_MESSAGE = "과외를 위한 모든 과정을 한 번에 \n 쉽고, 간편하게";

  return (
    <>
      <ThirdSwiperWrapper>
        <SwiperTitleLayout mainTitleContent={MAIN_TITLE_MESSAGE} subTitleContent={SUB_TITLE_MESSAGE} />
        <LogoWrapper>
          <ThirdSwiperFirstTreeIcon />

          <ThirdSwiperSecondTreeIcon />

          <ThirdSwiperThirdTreeIcon />
        </LogoWrapper>
      </ThirdSwiperWrapper>
    </>
  );
}

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

const ThirdSwiperFirstTreeIcon = styled(ThirdSwiperFirstTree)`
  width: 11.2445rem;
  height: 15.4373rem;

  margin-left: 0.87rem;
`;
const ThirdSwiperSecondTreeIcon = styled(ThirdSwiperSecondTree)`
  width: 11.2445rem;
  height: 15.4373rem;
`;
const ThirdSwiperThirdTreeIcon = styled(ThirdSwiperThirdTree)`
  width: 8.5rem;
  height: 12rem;
  margin-left: 0.1rem;
`;
