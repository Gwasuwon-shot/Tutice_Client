import { styled } from "styled-components";
import { NoClassLogoParentsHomeIc } from "../../assets";
import RoundBottomButton from "../common/RoundBottomButton";

export default function NoClassParentsHome() {
  return (
    <NoClassParentsHomeWrapper>
      <NoClassLogoParentsHomeIcon />

      <NoClassMessage>아직 수업나무가 생성되지 않았어요!</NoClassMessage>

      <NoClassSubMessage>
        선생님에게 수업나무 링크를 공유받아 <br /> 수업관리를 확인해보세요
      </NoClassSubMessage>

      <RoundBottomButton buttonMessage="온보딩 구경하기" />
    </NoClassParentsHomeWrapper>
  );
}

const NoClassParentsHomeWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NoClassLogoParentsHomeIcon = styled(NoClassLogoParentsHomeIc)`
  width: 8.4rem;
  margin-top: 4rem;
`;

const NoClassMessage = styled.h2`
  margin-top: 1.5rem;

  ${({ theme }) => theme.fonts.title02};
  color: ${({ theme }) => theme.colors.green6};

  text-align: center;
`;

const NoClassSubMessage = styled.p`
  margin-top: 0.8rem;
  margin-bottom: 6.2rem;

  ${({ theme }) => theme.fonts.body07};
  color: ${({ theme }) => theme.colors.grey700};

  text-align: center;
`;
