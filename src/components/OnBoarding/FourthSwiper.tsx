import { styled } from "styled-components";
import { FourthSwiperFirstTree, FourthSwiperSecondTree, FourthSwiperThirdTree } from "../../assets";
import SwiperTitleLayout from "./SwiperTitleLayout";

const FourthSwiper = () => {
  const MAIN_TITLE_MESSAGE = "Reliable";
  const SUB_TITLE_MESSAGE = "믿을 수 있는 알림 서비스로 \n 수업의 결실을 안전하게 수확하세요";

  return (
    <>
      <FourthSwiperWrapper>
        <SwiperTitleLayout mainTitleContent={MAIN_TITLE_MESSAGE} subTitleContent={SUB_TITLE_MESSAGE} />
        <LogoWrapper>
          <FirstTreeWrapper>
            <FourthSwiperFirstTree />
          </FirstTreeWrapper>

          <FourthSwiperSecondTree />

          <ThirdTreeWrapper>
            <FourthSwiperThirdTree />
          </ThirdTreeWrapper>
        </LogoWrapper>
      </FourthSwiperWrapper>
    </>
  );
};

const FourthSwiperWrapper = styled.div`
  display: flex;
  flex-direction: column;

  position: absolute;
  bottom: 0;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: flex-end;

  width: 100%;
  margin-top: 6.021rem;
`;

const FirstTreeWrapper = styled.div`
  margin-right: 2.181rem;
`;

const ThirdTreeWrapper = styled.div`
  margin-left: 1.156rem;
`;

export default FourthSwiper;
