import { styled } from "styled-components";
import { TuticeWithTextCommonIc } from "../../assets";

export default function AfterSignup() {
  const MAIN_TEXT = `이은수 선생님 환영합니다! \n 수업 나무 관리를 통해 \n 과외 관리를 시작해보세요. `;
  return (
    <Container>
      <TuticeWithTextCommonIcon />
      {MAIN_TEXT}
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
  flex-shrink: 0;
`;

const MainText = styled.p``;
