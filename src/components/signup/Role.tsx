import React from "react";
import { styled } from "styled-components";

export default function Role() {
  return (
    <>
      <Header> header </Header>
      <RoleText>어떤 회원으로 가입할까요?</RoleText>
      <RadioButton type="radio" name="role" value="teacher" id="teacher" />
      <RoleRapper>
        <RadioName htmlFor="teacher">선생님으로 가입하기 </RadioName>
        <RadioSubName htmlFor="teacher"> 과외 진행에 있어서 수업에만 더 집중하고 싶다면! </RadioSubName>
      </RoleRapper>
      <RadioButton type="radio" name="role" value="teacher" id="teacher" />
      <RoleRapper>
        <RadioName htmlFor="teacher">학부모님으로 가입하기 </RadioName>
        <RadioSubName htmlFor="teacher"> 자녀의 수업 출결을 꼼꼼하게 확인 받고 싶다면! </RadioSubName>
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
  flex-direction: column;
`;

const RadioButton = styled.input``;

const RadioName = styled.label`
  /* ${({ theme }) => theme.fonts.body3}; */
`;

const RadioSubName = styled.label`
  /* ${({ theme }) => theme.fonts.body1}; */
`;
