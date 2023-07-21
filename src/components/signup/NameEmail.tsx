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
import ProgressBar from "../common/ProgressBar";
import { PLACEHOLDER_TEXT, SIGNUP_TITLE } from "../../core/signup/signupTitle";
import { BUTTON_TEXT } from "../../core/signup/buttonText";
import { SIGNUP_ERROR_MESSAGE } from "../../core/signup/signupErrorMessage";
import { SIGNUP_FIELD_LABEL } from "../../core/signup/signupLabelText";

export default function NameEmail() {
  const [newUser, setNewUser] = useRecoilState(newUserData);
  const setStep = useSetRecoilState(stepNum);
  // 이거 우째요...
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isName, setIsName] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  // setName
  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();

    setName(e.target.value);
  }

  // setEmail
  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();

    setEmail(e.target.value);
  }

  // 완료 버튼으로 다음으로 넘어가기
  function handleDoneClick() {
    setNewUser((prev) => ({ ...prev, name: name, email: email }));

    setStep(3);
  }

  useEffect(() => {
    // 이메일 정규식 확인
    email.match(EMAIL_REGEX) === null ? setIsEmail(false) : setIsEmail(true);

    // 이름 정규식 확인
    name.length > 1 ? setIsName(true) : setIsName(false);

    // 이메일, 이름 입력 및 정규식 확인 : 버튼 활성화
    name && email && isName && isEmail ? setIsActive(true) : setIsActive(false);
  }, [name, email, isName, isEmail]);

  return (
    <>
      <ProgressBar progress={50} />
      <BackButtonWrapper>
        <BackButton />
      </BackButtonWrapper>
      <Container>
        <SignupTitleLayout MainText={SIGNUP_TITLE.needNameEmail} />
        <InputNameWrapper $isName={isName} $nameFocus={nameFocus}>
          <TextLabelLayout labelText={SIGNUP_FIELD_LABEL.name} />
          <Inputfield
            onFocus={() => setNameFocus(true)}
            onBlur={() => setNameFocus(false)}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleNameChange(e)}
            type="text"
            placeholder={PLACEHOLDER_TEXT.nameHolder}
          />
        </InputNameWrapper>
        {!isName && nameFocus ? <RegexField unMatchText={SIGNUP_ERROR_MESSAGE.nameError} /> : null}
        <InputEmailWrapper $isEmail={isEmail} $emailFocus={emailFocus}>
          <TextLabelLayout labelText={SIGNUP_FIELD_LABEL.email} />
          <Inputfield
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleEmailChange(e)}
            type="text"
            placeholder={PLACEHOLDER_TEXT.emailHolder}
          />
        </InputEmailWrapper>

        {!isEmail && emailFocus ? <RegexField unMatchText={SIGNUP_ERROR_MESSAGE.emailError} /> : null}
      </Container>
      <BottomButton
        type="button"
        children={BUTTON_TEXT.done}
        isActive={isActive}
        onClick={handleDoneClick}
        disabled={!isActive}
      />
    </>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;

  padding-left: 1.6rem;
  margin-top: 5rem;
`;

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

  &::placeholder {
    color: ${({ theme }) => theme.colors.grey400};
    ${({ theme }) => theme.fonts.title03};
  }
`;

const BackButtonWrapper = styled.div`
  margin-left: 2rem;
`;
