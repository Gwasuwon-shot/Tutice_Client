import { styled } from "styled-components";
import { bellWelcomeIc } from "../../assets";
import SignupTitleLayout from "../signup/SignupTitleLayout";

export default function AlertSignup() {
  const MAIN_TEXT = `수업 나무를 통한 \n 쉬운 관리를 위해\n 알림을 활성화 해보세요 `;

  const SUB_TEXT = "*수업나무 : 수강생을 추가하여 관리할 수 있는 서비스입니다.";
  return (
    <Container>
      <BellWelcomeIcon />
      <SignupTitleLayout MainText={MAIN_TEXT} />
    </Container>
  );
}

const Container = styled.div`
  margin-top: 3.6rem;
`;
const BellWelcomeIcon = styled(bellWelcomeIc)`
  width: 2.9rem;
  height: 3.3rem;
  margin-bottom: 1.5rem;
`;
