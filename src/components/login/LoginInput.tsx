import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import TextLabelLayout from "../signup/TextLabelLayout";
import { ViewingLoginIc } from "../../assets";

export default function LoginInput() {
  const [pwViewing, setPwViewing] = useState(false);
  const [pwFocus, setPwFocus] = useState(false);
  const [password, setPassword] = useState(false);

  function handlePWFocusing(e) {
    setPassword(e.target.value);
  }

  useEffect(() => {
    console.log(password);
    password === "" ? setPwViewing(false) : setPwViewing(true);
  }, []);

  return (
    <>
      <InputFieldWrapper>
        <TextLabelLayout labelText="이메일" />
        <Inputfield type="text" placeholder="이메일을 입력하세요." />
      </InputFieldWrapper>
      <InputFieldWrapper>
        <TextLabelLayout labelText="비밀번호" />
        <PasswordIconWrapper>
          <Inputfield onChange={(e) => handlePWFocusing(e)} type="password" placeholder="비밀번호를 입력하세요" />
          {pwViewing ? <ViewingLoginIcon /> : null}
        </PasswordIconWrapper>
      </InputFieldWrapper>
    </>
  );
}

const InputFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-right: 1.4rem;
  margin-bottom: 2rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.grey70};
`;

const Inputfield = styled.input`
  width: 20rem;
  margin: 1rem 0.2rem;

  &::placeholder {
    color: ${({ theme }) => theme.colors.grey400};
    ${({ theme }) => theme.fonts.title03};
  }
`;

const PasswordIconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 29rem;
`;

const ViewingLoginIcon = styled(ViewingLoginIc)`
  width: 1.6rem;
  height: 1.6rem;
  margin-right: 0.6rem;
  flex-shrink: 0;
`;
