import { styled } from "styled-components";
import { BackButtonSignupIc, BellWelcomeIc } from "../../assets";
import SignupTitleLayout from "../signup/SignupTitleLayout";
import ButtonLayout from "./ButtonLayout";

interface AlertSignupProp {
  setIsWelcome: Dispatch<SetStateAction<boolean>>;
}

export default function AlertSignup(prop: AlertSignupProp) {
  const { setIsWelcome } = prop;
  const MAIN_TEXT = `수업 나무를 통한 \n 쉬운 관리를 위해\n 알림을 활성화 해보세요 `;

  const SUB_TEXT = "푸시알림을 활성화를 통해 \n 출결, 수업비 관리를 도울 수 있어요";
  function handleToSetAlert() {}
  return (
    <>
      <BackButtonSignupIcon onClick={() => setIsWelcome(true)} />
      <Container>
        <BellWelcomeIcon />
        <SignupTitleLayout MainText={MAIN_TEXT} />
        <SubText>{SUB_TEXT}</SubText>
      </Container>

      <ButtonLayout onClick={handleToSetAlert} buttonText={"할래요!"} />
    </>
  );
}

const Container = styled.div`
  margin-top: 6rem;
`;
const BellWelcomeIcon = styled(BellWelcomeIc)`
  width: 2.9rem;
  height: 3.3rem;
  margin-bottom: 1.5rem;
`;

const SubText = styled.p`
  margin-top: 2.2rem;

  color: ${({ theme }) => theme.colors.grey600};
  ${({ theme }) => theme.fonts.body04};
`;

const BackButtonSignupIcon = styled(BackButtonSignupIc)`
  width: 4rem;
  height: 4rem;
  margin-left: -1.4rem;
`;
