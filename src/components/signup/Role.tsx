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

export default function Role() {
  const [role, setRole] = useState("");
  const [isActive, setIsActive] = useState(false);
  const ROLE_TEXT = "어떤 회원으로 가입할까요?";
  const setStep = useSetRecoilState(stepNum);
  const [newUser, setNewUser] = useRecoilState(newUserData);

  function handleRadioClick(e: React.ChangeEvent<HTMLInputElement>) {
    console.log();
    setIsActive(true);
    setRole(e.target.value);
  }

  function handleDoneClick() {
    setNewUser((prev) => ({ ...prev, role: role }));
    setStep(2);
  }

  useEffect(() => {
    console.log(newUser);
  }, []);
  return (
    <>
      <ProgressBar progress={0} />
      <BackButton />
      <Container>
        <SignupTitleLayout MainText={ROLE_TEXT} />
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
                <RadioBoldName htmlFor="TEACHER">선생님 </RadioBoldName>
                <RadioPlainName htmlFor="TEACHER">으로 가입하기 </RadioPlainName>
              </RadioNameWrapper>
              <RadioSubName htmlFor="TEACHER"> 과외 진행에 있어서 수업에만 더 집중하고 싶다면! </RadioSubName>
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
                <RadioBoldName htmlFor="PARENTS">학부모님 </RadioBoldName>
                <RadioPlainName htmlFor="PARENTS">으로 가입하기 </RadioPlainName>
              </RadioNameWrapper>
              <RadioSubName htmlFor="PARENTS"> 자녀의 수업 출결을 꼼꼼하게 확인 받고 싶다면! </RadioSubName>
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
