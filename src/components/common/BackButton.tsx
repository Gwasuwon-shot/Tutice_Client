import { useRecoilState } from "recoil";
import { styled } from "styled-components";
import { backButtonSignupIc } from "../../assets";
import { stepNum } from "../../atom/signup/signup";

export default function BackButton() {
  const [step, setStep] = useRecoilState(stepNum);

  function handleMoveToBack() {
    setStep(step - 1);
  }

  return (
    <>
      <BackButtonSignupIcon onClick={handleMoveToBack} />
    </>
  );
}
const BackButtonSignupIcon = styled(backButtonSignupIc)`
  width: 4rem;
  height: 4rem;
  margin-top: 0.77rem;
  margin-left: 1.6rem;
`;
