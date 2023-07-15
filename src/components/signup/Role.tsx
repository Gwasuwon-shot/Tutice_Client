import { useEffect, useState } from "react";
import { styled } from "styled-components";
import RoleCheckSignupIc from "../../assets/icon/RoleCheckSignupIc.svg";
import RoleNoneCheckSignupIc from "../../assets/icon/RoleNoneCheckSignupIc.svg";
import BottomButton from "../common/BottomButton";
import { useRecoilState, useSetRecoilState } from "recoil";
import { newUserData, stepNum } from "../../atom/signup/signup";
import SignupTitleLayout from "./SignupTitleLayout";
import BackButton from "../common/BackButton";
import ProgressBar from "../common/ProgressBar";
import { ROLE_NAME, ROLE_SUB_TEXT, SIGNUP_TITLE } from "../../core/signup/signupTitle";
import { BUTTON_TEXT } from "../../core/signup/buttonText";

export default function Role() {
  const [role, setRole] = useState("");
  const [isActive, setIsActive] = useState(false);
  const setStep = useSetRecoilState(stepNum);
  const [newUser, setNewUser] = useRecoilState(newUserData);

  function handleRadioClick(e: React.ChangeEvent<HTMLInputElement>) {
    setIsActive(true);
    setRole(e.target.value);
  }

  function handleDoneClick() {
    setNewUser((prev) => ({ ...prev, role: role }));
    setStep(2);
  }

  useEffect(() => {}, []);

  return (
    <>
      <ProgressBar progress={0} />
      <BackButton />
      <Container>
        <SignupTitleLayout MainText={SIGNUP_TITLE.whichRole} />
        <RadioWrapper>
          <RoleRapper>
            <RadioButton
              type="radio"
              name="role"
              value="TEACHER"
              id="TEACHER"
              onClick={(e: React.ChangeEvent<HTMLInputElement>) => handleRadioClick(e)}
              $RoleNoneCheckSignupIc={RoleNoneCheckSignupIc}
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
              value="PARENTS"
              id="PARENTS"
              onClick={handleRadioClick}
              $RoleNoneCheckSignupIc={RoleNoneCheckSignupIc}
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
        <BottomButton
          type="button"
          disabled={!isActive}
          isActive={isActive}
          children={BUTTON_TEXT.done}
          onClick={handleDoneClick}
        />
      </Container>
    </>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;

  padding-left: 1.6rem;
  margin-top: 5rem;
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

const RadioButton = styled.input<{ $RoleNoneCheckSignupIc: string }>`
  background-image: url(${({ $RoleNoneCheckSignupIc }) => $RoleNoneCheckSignupIc});

  width: 4rem;
  height: 4rem;
  flex-shrink: 0;

  margin-right: 2rem;

  &:checked {
    background-image: url("${RoleCheckSignupIc}");
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
