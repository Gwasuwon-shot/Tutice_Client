import React from "react";
import { styled } from "styled-components";
import RoleCheckSignupIc from "../../assets/icon/RoleNoneCheckSignupIc.svg";

export default function Role() {
  return (
    <>
      <Header> header </Header>
      <RoleText>어떤 회원으로 가입할까요?</RoleText>
      <RoleRapper>
        <RadioButton type="radio" name="role" value="teacher" id="teacher" />
        <TextWrapper>
          <RadioName htmlFor="teacher">선생님으로 가입하기 </RadioName>
          <RadioSubName htmlFor="teacher"> 과외 진행에 있어서 수업에만 더 집중하고 싶다면! </RadioSubName>
        </TextWrapper>
      </RoleRapper>
      <RoleRapper>
        <RadioButton type="radio" name="role" value="teacher" id="teacher" />
        <TextWrapper>
          <RadioName htmlFor="teacher">학부모님으로 가입하기 </RadioName>
          <RadioSubName htmlFor="teacher"> 자녀의 수업 출결을 꼼꼼하게 확인 받고 싶다면! </RadioSubName>
        </TextWrapper>
      </RoleRapper>
    </>
  );
}

const Header = styled.header`
  display: flex;
`;

const RoleText = styled.span`
  ${({ theme }) => theme.fonts.title1};
`;

const RoleRapper = styled.div`
  display: flex;
  align-items: center;

  margin-left: 2.5rem;
`;

const RadioButton = styled.input`
  display: block;
  background-image: url("${RoleCheckSignupIc}");

  width: 4rem;
  height: 4rem;
  flex-shrink: 0;

  margin-right: 2rem;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const RadioName = styled.label`
  /* ${({ theme }) => theme.fonts.body3}; */
`;

const RadioSubName = styled.label`
  ${({ theme }) => theme.fonts.body07};
`;
