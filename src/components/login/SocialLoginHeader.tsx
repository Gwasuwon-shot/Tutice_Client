import { styled } from "styled-components";
import { TuticeWithTextCommonIc } from "../../assets";
import { BackButton } from "../common";

export default function SocialLoginHeader() {
  const LOGIN_MAIN_TITLE = " 과외 수업을 위한 \n 원클릭 수업 통합 관리 서비스, 지급 시작하세요!";

  return (
    <>
      <BackButton />
      <TitleWrapper>
        <TuticeWithTextCommonIcon />
        <Title>{LOGIN_MAIN_TITLE}</Title>
      </TitleWrapper>
    </>
  );
}

const Title = styled.p`
  margin-top: 0.9rem;
  ${({ theme }) => theme.fonts.body04};
  color: ${({ theme }) => theme.colors.grey600};
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.2rem;
  margin-bottom: 0.8rem;

  white-space: pre-line;
`;

const TuticeWithTextCommonIcon = styled(TuticeWithTextCommonIc)`
  width: 13em;
  height: 4rem;
  margin-left: -1.4rem;
  flex-shrink: 0;
`;
