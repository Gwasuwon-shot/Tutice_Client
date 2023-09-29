import { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { styled } from "styled-components";
import RoleCheckSignupIc from "../../assets/icon/RoleCheckSignupIc.svg";
import RoleNoneCheckSignupIc from "../../assets/icon/RoleNoneCheckSignupIc.svg";
import { newUserData, stepNum } from "../../atom/signup/signup";
import { BUTTON_TEXT, ROLE_NAME, ROLE_SUB_TEXT, SIGNUP_TITLE } from "../../core/signup/signUpTextLabels";
import BackButton from "../common/BackButton";
import BottomButton from "../common/BottomButton";
import ProgressBar from "../common/ProgressBar";
import SignupTitleLayout from "./SignupTitleLayout";

export default function Role() {
  const [role, setRole] = useState("");
  const [isActive, setIsActive] = useState(false);
  const setStep = useSetRecoilState(stepNum);
  const [newUser, setNewUser] = useRecoilState(newUserData);

  function handleRadioClick(e: React.MouseEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement;
    setIsActive(true);
    setRole(target.value);
  }

  function handleDoneClick() {
    setNewUser((prev) => ({ ...prev, role: role }));
    setStep(2);
  }

  return (
    <>
      <BackButtonWrapper>
        <BackButton />
      </BackButtonWrapper>
      <ProgressBar progress={25} />
      <Container>
        <SignupTitleLayout>{SIGNUP_TITLE.whichRole}</SignupTitleLayout>
        <RadioWrapper>
          <RoleRapper>
            <RadioButton
              type="radio"
              name="role"
              value="선생님"
              id="TEACHER"
              onClick={(e: React.MouseEvent<HTMLInputElement>) => handleRadioClick(e)}
              $RoleNoneCheckSignupIc={RoleNoneCheckSignupIc}
              $RoleCheckSignupIc={RoleCheckSignupIc}
            />
            <TextWrapper>
              <RadioNameWrapper>
                <RadioBoldName htmlFor="TEACHER">{ROLE_NAME.teacher} </RadioBoldName>
                <RadioPlainName htmlFor="TEACHER">{ROLE_SUB_TEXT.signupBy} </RadioPlainName>
              </RadioNameWrapper>
              <RadioSubName htmlFor="TEACHER"> {ROLE_SUB_TEXT.teacherText} </RadioSubName>
            </TextWrapper>
          </RoleRapper>

          <RoleRapper>
            <RadioButton
              type="radio"
              name="role"
              value="부모님"
              id="PARENTS"
              onClick={(e: React.MouseEvent<HTMLInputElement>) => handleRadioClick(e)}
              $RoleNoneCheckSignupIc={RoleNoneCheckSignupIc}
              $RoleCheckSignupIc={RoleCheckSignupIc}
            />
            <TextWrapper>
              <RadioNameWrapper>
                <RadioBoldName htmlFor="PARENTS">{ROLE_NAME.parent} </RadioBoldName>
                <RadioPlainName htmlFor="PARENTS">{ROLE_SUB_TEXT.signupBy} </RadioPlainName>
              </RadioNameWrapper>
              <RadioSubName htmlFor="PARENTS"> {ROLE_SUB_TEXT.parentsText}</RadioSubName>
            </TextWrapper>
          </RoleRapper>
        </RadioWrapper>
      </Container>
      <BottomButton
        type="button"
        disabled={!isActive}
        isActive={isActive}
        children={BUTTON_TEXT.next}
        onClick={handleDoneClick}
      />
    </>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;

  padding-left: 1.6rem;
  margin-top: 2.8rem;
`;

const RadioWrapper = styled.div`
  margin-top: 5.08rem;
`;

const RoleText = styled.span`
  ${({ theme }) => theme.fonts.title01};
`;

const RoleRapper = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 3.6rem;
  margin-left: 0.9em;
`;

const RadioButton = styled.input<{ $RoleNoneCheckSignupIc: string; $RoleCheckSignupIc: string }>`
  background-image: url(${({ $RoleNoneCheckSignupIc }) => $RoleNoneCheckSignupIc});
  background-size: cover;

  width: 4rem;
  height: 4rem;
  flex-shrink: 0;

  margin-right: 2rem;

  &:checked {
    background-image: url(${({ $RoleCheckSignupIc }) => $RoleCheckSignupIc});
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const RadioNameWrapper = styled.div`
  display: flex;
  flex-direction: row;

  color: ${({ theme }) => theme.colors.grey900};
`;

const RadioBoldName = styled.label`
  ${({ theme }) => theme.fonts.title02};
`;

const RadioPlainName = styled.label`
  ${({ theme }) => theme.fonts.title03};
`;

const RadioSubName = styled.label`
  color: ${({ theme }) => theme.colors.grey500};
  ${({ theme }) => theme.fonts.body07};
`;

const BackButtonWrapper = styled.div`
  margin-left: 2rem;
`;
