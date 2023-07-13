import { useEffect, useState } from "react";
import { styled } from "styled-components";
import BottomButton from "../common/BottomButton";
import SignupTitleLayout from "./SignupTitleLayout";
import BackButton from "../common/BackButton";
import TextLabelLayout from "./TextLabelLayout";
import { useRecoilState, useSetRecoilState } from "recoil";
import { newUserData, stepNum } from "../../atom/signup/signup";
import RegexField from "./RegexField";
import { EMAIL_REGEX } from "../../core/signup/regex";

export default function NameEmail() {
  const [newUser, setNewUser] = useRecoilState(newUserData);
  const setStep = useSetRecoilState(stepNum);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isName, setIsName] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const NAME_TEXT = "가입을 위해 \n 이름과 이메일이 필요해요";

  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setName(e.target.value);
    name.length > 1 ? setIsName(true) : setIsName(false);
  }

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setEmail(e.target.value);
    if (email.match(EMAIL_REGEX) === null) {
      setIsEmail(false);
    } else {
      setIsEmail(true);
    }
  }

  function handleDoneClick() {
    setNewUser((prev) => ({ ...prev, name: name, email: email }));
    setStep(3);
  }

  function handNameFocus() {}

  useEffect(() => {
    name && email ? setIsActive(true) : setIsActive(false);
    console.log(name, email, isEmail, isName);
  }, [name, email, isName, isEmail]);

  return (
    <>
      <BackButton />
      <Container>
        <SignupTitleLayout MainText={NAME_TEXT} />
        <InputWrapper>
          <TextLabelLayout labelText={"이름"} />
          <Inputfield
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleNameChange(e)}
            type="text"
            placeholder="이름을 입력하세요"
          />
        </InputWrapper>
        {isName ? null : (
          <RegexField
            unMatchText="
        이름은 최소 2자 이상 입력해주세요."
          />
        )}
        <InputWrapper>
          <TextLabelLayout labelText={"이메일"} />
          <Inputfield
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleEmailChange(e)}
            type="text"
            placeholder="사용하실 이메일을 입력하세요"
          />
        </InputWrapper>

        {isEmail ? null : <RegexField unMatchText="올바른 이메일 형식으로 입력해 주세요." />}
        <BottomButton children="완료" isActive={isActive} onClick={handleDoneClick} />
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

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 29.2rem;
  margin-top: 3.2rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.grey70};
`;

const Inputfield = styled.input`
  margin: 1rem 0.2rem;

  &::placeholder {
    color: ${({ theme }) => theme.colors.grey400};
    ${({ theme }) => theme.fonts.title03};
  }
`;
