import React, { useState } from "react";
import { styled } from "styled-components";
import BottomButton from "../common/BottomButton";
import SignupTitleLayout from "./SignupTitleLayout";
import BackButton from "../common/BackButton";

export default function NameEmail() {
  const [isactive, setIsactive] = useState(false);
  const NAME_TEXT = "가입을 위해 \n 이름과 이메일이 필요해요";

  return (
    <>
      <BackButton />
      <Container>
        <SignupTitleLayout MainText={NAME_TEXT} />
        <InputWrapper>
          <InputLabel>이름</InputLabel>
          <Inputfield type="text" placeholder="이름을 입력하세요"></Inputfield>
        </InputWrapper>
        <InputWrapper>
          <InputLabel>이메일</InputLabel>
          <Inputfield type="text" placeholder="사용하실 이메일을 입력하세요"></Inputfield>
        </InputWrapper>
        <BottomButton children="완료" />
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 5rem;
  margin-left: 1.4rem;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.grey70};

  margin-top: 3.2rem;
`;

const InputLabel = styled.span`
  color: ${({ theme }) => theme.colors.grey300};
  ${({ theme }) => theme.fonts.body04};
`;

const Inputfield = styled.input`
  margin: 1rem 0.2rem;

  &::placeholder {
    color: ${({ theme }) => theme.colors.grey400};
    ${({ theme }) => theme.fonts.title03};
  }
`;
