import { styled } from "styled-components";
import { MainLogoGradation } from "../../assets";
import SwiperTitleLayout from "./SwiperTitleLayout";

export default function SecondSwiper() {
  const MAIN_TITLE_MESSAGE = "Essential";
  const SUB_TITLE_MESSAGE = "선생님은 수업에만 집중하세요. \n 과외 관리는 튜티스가 도와드릴게요.";

  return (
    <>
      <SecondSwiperWrapper>
        <SwiperTitleLayout mainTitleContent={MAIN_TITLE_MESSAGE} subTitleContent={SUB_TITLE_MESSAGE} />
        <LogoWrapper>
          <MainLogoGradation />
        </LogoWrapper>
      </SecondSwiperWrapper>
    </>
  );
}

const SecondSwiperWrapper = styled.article`
  display: flex;
  flex-direction: column;
`;

const LogoWrapper = styled.div`
  align-self: center;

  margin-top: 1.35rem;
`;
