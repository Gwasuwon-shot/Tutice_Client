import { styled } from "styled-components";
import { TuticeWithTextCommonIc } from "../../assets";
import SignupTitleLayout from "../signup/SignupTitleLayout";

export default function AfterSignup() {
  const MAIN_TEXT = `이은수 선생님 환영합니다! \n 수업 나무 관리를 통해 \n 과외 관리를 시작해보세요. `;

  const SUN_TEXT = "*수업나무 : 수강생을 추가하여 관리할 수 있는 서비스입니다.";
  return (
    <Container>
      <TuticeWithTextCommonIcon />
      <SignupTitleLayout MainText={MAIN_TEXT} />
      <SubText>{SUN_TEXT}</SubText>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 6.3rem;
`;

const TuticeWithTextCommonIcon = styled(TuticeWithTextCommonIc)`
  width: 10rem;
  height: 3.3rem;
  margin-bottom: 1.3rem;
  margin-left: -1.4rem;
  flex-shrink: 0;
`;

const SubText = styled.p`
  margin-top: 2.2rem;

  color: ${({ theme }) => theme.colors.grey400};
  ${({ theme }) => theme.fonts.body07};
`;
