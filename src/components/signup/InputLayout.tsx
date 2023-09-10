import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { styled } from "styled-components";
import { newUserData } from "../../atom/signup/signup";
import TextLabelLayout from "./TextLabelLayout";

// 공사중

interface InputfieldLayoutProps {
  onFocus: React.FocusEventHandler<HTMLInputElement>;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  labelText?: string | undefined;
  placeholder?: string | undefined;
}

export default function InputLayout(props: InputfieldLayoutProps) {
  const { labelText, onFocus, onBlur, placeholder, onChange } = props;
  const [newUser, setNewUser] = useRecoilState(newUserData);
  const [isName, setIsName] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);

  return (
    <InputNameWrapper $isName={isName} $nameFocus={nameFocus}>
      <TextLabelLayout labelText={labelText} />
      <Inputfield onFocus={onFocus} onBlur={onBlur} onChange={onchange} type="text" placeholder={placeholder} />
    </InputNameWrapper>
  );
}

const InputNameWrapper = styled.div<{ $nameFocus: boolean; $isName: boolean }>`
  display: flex;
  flex-direction: column;

  width: 28rem;

  margin-top: 3.2rem;

  border-bottom: 0.1rem solid
    ${({ theme, $nameFocus, $isName }) => ($nameFocus || $isName ? theme.colors.green5 : theme.colors.grey70)};
`;

const InputEmailWrapper = styled.div<{ $emailFocus: boolean; $isEmail: boolean }>`
  display: flex;
  flex-direction: column;
  width: 28rem;
  margin-top: 3.2rem;

  border-bottom: 0.1rem solid
    ${({ theme, $emailFocus, $isEmail }) => ($emailFocus || $isEmail ? theme.colors.green5 : theme.colors.grey70)};
`;

const Inputfield = styled.input`
  padding: 0;
  height: 2rem;
  margin-top: 1em;
  margin-bottom: 1.1rem;
  margin-left: 0.2rem;
  ${({ theme }) => theme.fonts.title03};

  &textarea::placeholder {
    color: ${({ theme }) => theme.colors.grey400};
    ${({ theme }) => theme.fonts.title03};
  }
`;
