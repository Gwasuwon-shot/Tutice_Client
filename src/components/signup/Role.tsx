import React from "react";
import { styled } from "styled-components";
import RoleCheckSignupIc from "../../assets/icon/RoleCheckSignupIc.svg";
import RoleNoneCheckSignupIc from "../../assets/icon/RoleNoneCheckSignupIc.svg";
// import BottomButton from "../common/BottomButton";

export default function Role() {
  return (
    <>
      <Container>
        <RoleText>어떤 회원으로 가입할까요?</RoleText>
        <RoleRapper>
          <RadioButton type="radio" name="role" value="teacher" id="teacher" />
          <TextWrapper>
            <RadioNameWrapper>
              <RadioBoldName htmlFor="teacher">선생님 </RadioBoldName>
              <RadioPlainName htmlFor="teacher">으로 가입하기 </RadioPlainName>
            </RadioNameWrapper>
            <RadioSubName htmlFor="teacher"> 과외 진행에 있어서 수업에만 더 집중하고 싶다면! </RadioSubName>
          </TextWrapper>
        </RoleRapper>
        <RoleRapper>
          <RadioButton type="radio" name="role" value="parent" id="parent" />
          <TextWrapper>
            <RadioNameWrapper>
              <RadioBoldName htmlFor="parent">학부모님 </RadioBoldName>
              <RadioPlainName htmlFor="parent">으로 가입하기 </RadioPlainName>
            </RadioNameWrapper>
            <RadioSubName htmlFor="parent"> 자녀의 수업 출결을 꼼꼼하게 확인 받고 싶다면! </RadioSubName>
          </TextWrapper>
        </RoleRapper>
        {/* <BottomButton children="완료" /> */}
      </Container>
    </>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;

  padding-left: 1.6rem;
`;

const RoleText = styled.span`
  margin-top: 5rem;
  margin-bottom: 5.1rem;
  ${({ theme }) => theme.fonts.title01};
`;

const RoleRapper = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 3.6rem;
  margin-left: 0.9em;
`;

const RadioButton = styled.input`
  background-image: url("${RoleNoneCheckSignupIc}");

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
  ${({ theme }) => theme.fonts.body07};

  color: ${({ theme }) => theme.colors.grey500};
`;
