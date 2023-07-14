import React, { useState } from "react";
import { styled } from "styled-components";
import TextLabelLayout from "../signup/TextLabelLayout";

export default function LoginInput() {
  const [pwViewing, setPwViewing] = useState("password");
  return (
    <>
      <InputFieldWrapper>
        <TextLabelLayout labelText="이메일" />
        <Inputfield type="text" placeholder="이메일을 입력하세요." />
      </InputFieldWrapper>
      <InputFieldWrapper>
        <TextLabelLayout labelText="비밀번호" />
        <Inputfield type="password" placeholder="비밀번호를 입력하세요" />
      </InputFieldWrapper>
    </>
  );
}

const InputFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 2rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.grey70};
`;

const Inputfield = styled.input`
  margin: 1rem 0.2rem;

  &::placeholder {
    color: ${({ theme }) => theme.colors.grey400};
    ${({ theme }) => theme.fonts.title03};
  }
`;
