import { styled } from "styled-components";
import { FourthSwiperFirstTree, FourthSwiperSecondTree, FourthSwiperThirdTree } from "../../assets";
import SwiperTitleLayout from "./SwiperTitleLayout";

export default function FourthSwiper() {
  const MAIN_TITLE_MESSAGE = "Reliable";
  const SUB_TITLE_MESSAGE = "믿을 수 있는 알림 서비스로 \n 수업의 결실을 안전하게 수확하세요";

  return (
    <>
      <FourthSwiperWrapper>
        <SwiperTitleLayout mainTitleContent={MAIN_TITLE_MESSAGE} subTitleContent={SUB_TITLE_MESSAGE} />
        <LogoWrapper>
          <FourthSwiperFirstTreeIcon />

          <FourthSwiperSecondTreeIcon />

          <FourthSwiperThirdTreeIcon />
        </LogoWrapper>
      </FourthSwiperWrapper>
    </>
  );
}

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
  margin-top: 9.8rem;
  margin-left: -0.08rem;
`;

const FourthSwiperFirstTreeIcon = styled(FourthSwiperFirstTree)`
  width: 3.5rem;
  height: 12rem;

  margin-right: 2.18rem;
`;

const FourthSwiperSecondTreeIcon = styled(FourthSwiperSecondTree)`
  width: 11.2445rem;
  height: 15.4373rem;
`;

const FourthSwiperThirdTreeIcon = styled(FourthSwiperThirdTree)`
  width: 15.4543rem;
  height: 15.8162rem;

  margin-left: 1.16rem;
`;
