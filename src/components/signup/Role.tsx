import React, { useState } from "react";
import { styled } from "styled-components";
import RoleCheckSignupIc from "../../assets/icon/RoleCheckSignupIc.svg";
import RoleNoneCheckSignupIc from "../../assets/icon/RoleNoneCheckSignupIc.svg";
import BottomButton from "../common/BottomButton";
import { useSetRecoilState } from "recoil";
import { stepNum } from "../../atom/signup/signup";
import SignupTitleLayout from "./SignupTitleLayout";
import BackButton from "../common/BackButton";

export default function Role() {
  const [isActive, setIsActive] = useState(false);
  const ROLE_TEXT = "어떤 회원으로 가입할까요?";

  const setStep = useSetRecoilState(stepNum);
  function handleRadioClick() {
    setIsActive(true);
  }

  function handleDoneClick() {
    console.log("isClicked");
    setStep(2);
  }

  return (
    <>
      <BackButton />
      <Container>
        <SignupTitleLayout MainText={ROLE_TEXT} />
        <RadioWrapper>
          <RoleRapper>
            <RadioButton
              type="radio"
              name="role"
              value="teacher"
              id="teacher"
              onClick={handleRadioClick}
              $RoleNoneCheckSignupIc={RoleNoneCheckSignupIc}
            />
            <TextWrapper>
              <RadioNameWrapper>
                <RadioBoldName htmlFor="teacher">선생님 </RadioBoldName>
                <RadioPlainName htmlFor="teacher">으로 가입하기 </RadioPlainName>
              </RadioNameWrapper>
              <RadioSubName htmlFor="teacher"> 과외 진행에 있어서 수업에만 더 집중하고 싶다면! </RadioSubName>
            </TextWrapper>
          </RoleRapper>
          <RoleRapper>
            <RadioButton
              type="radio"
              name="role"
              value="parent"
              id="parent"
              onClick={handleRadioClick}
              $RoleNoneCheckSignupIc={RoleNoneCheckSignupIc}
            />
            <TextWrapper>
              <RadioNameWrapper>
                <RadioBoldName htmlFor="parent">학부모님 </RadioBoldName>
                <RadioPlainName htmlFor="parent">으로 가입하기 </RadioPlainName>
              </RadioNameWrapper>
              <RadioSubName htmlFor="parent"> 자녀의 수업 출결을 꼼꼼하게 확인 받고 싶다면! </RadioSubName>
            </TextWrapper>
          </RoleRapper>
        </RadioWrapper>
        <BottomButton isActive={isActive} children="완료" onClick={handleDoneClick} />
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

  /* margin-top: 5.1rem; */
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
