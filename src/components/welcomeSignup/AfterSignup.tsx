import { styled } from "styled-components";
import { TuticeWithTextCommonIc } from "../../assets";
import SignupTitleLayout from "../signup/SignupTitleLayout";
import ButtonLayout from "./ButtonLayout";

interface AfterSignupProp {
  setIsWelcome: Dispatch<SetStateAction<boolean>>;
}

export default function AfterSignup(prop: AfterSignupProp) {
  const { setIsWelcome } = prop;
  const MAIN_TEXT = `이은수 선생님 환영합니다! \n 수업 나무 관리를 통해 \n 과외 관리를 시작해보세요. `;

  const SUB_TEXT = "*수업나무 : 수강생을 추가하여 관리할 수 있는 서비스입니다.";

  function handleToNextStep() {
    setIsWelcome(false);
  }

  return (
    <>
      <Container>
        <TuticeWithTextCommonIcon />
        <SignupTitleLayout MainText={MAIN_TEXT} />
        <SubText>{SUB_TEXT}</SubText>
      </Container>

      <ButtonLayout onClick={handleToNextStep} buttonText={"수업 나무 생성"} />
    </>
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
