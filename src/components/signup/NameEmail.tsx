import { useEffect } from "react";
import { styled } from "styled-components";
import { useRecoilState, useSetRecoilState } from "recoil";
import { useMutation } from "react-query";
import { isAxiosError } from "axios";
import { ResponseDataType } from "./AgreeChecking";
import { postCheckEmail } from "../../api/postCheckEmail";
import { newUserData, stepNum } from "../../atom/signup/signup";
import { EMAIL_REGEX } from "../../core/signup/regex";
import {
  BUTTON_TEXT,
  PLACEHOLDER_TEXT,
  SIGNUP_ERROR_MESSAGE,
  SIGNUP_FIELD_LABEL,
  SIGNUP_TITLE,
} from "../../core/signup/signUpTextLabels";

import { BackButton, BottomButton, ProgressBar } from "../common";
import RegexField from "./RegexField";
import SignupTitleLayout from "./SignupTitleLayout";
import TextLabelLayout from "./TextLabelLayout";
import useSignupFormState from "../../hooks/useSignupFormState";
import EmailCheckButton from "./EmailCheckButton";
import EmailDuplicatedModal from "./EmailDuplicatedModal";

export default function NameEmail() {
  const [newUser, setNewUser] = useRecoilState(newUserData);
  const setStep = useSetRecoilState(stepNum);

  const {
    name,
    setName,
    email,
    setEmail,
    isName,
    setIsName,
    isEmail,
    setIsEmail,
    isActive,
    setIsActive,
    nameFocus,
    setNameFocus,
    emailFocus,
    setEmailFocus,
    modalMessage,
    setModalMessage,
    modalOpened,
    setModalOpened,
  } = useSignupFormState();

  const { mutate: postCheckEmailData } = useMutation(postCheckEmail, {
    onSuccess: (data) => {
      setModalMessage(data.data.message);
      setIsActive(true);
    },
    onError: (error) => {
      if (isAxiosError<ResponseDataType>(error)) {
        if (error.response) {
          setModalMessage(error.response?.data.message);
          setIsActive(false);
        }
      }
    },
  });

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

    setStep(4);
  }

  function nameRegex() {
    if (name === "") {
      return null;
    }
    if (!isName) {
      return <RegexField unMatchText={SIGNUP_ERROR_MESSAGE.nameError} />;
    }
  }

  function emailRegex() {
    if (email === "") {
      return null;
    }
    if (!isEmail) {
      return <RegexField unMatchText={SIGNUP_ERROR_MESSAGE.emailError} />;
    }
  }

  useEffect(() => {
    // 이메일 정규식 확인
    email.match(EMAIL_REGEX) === null ? setIsEmail(false) : setIsEmail(true);

    // 이름 정규식 확인
    name.length > 1 ? setIsName(true) : setIsName(false);
  }, [name, email, isName, isEmail, modalMessage]);

  // 이메일 중복 확인 버튼 실행
  function checkEmailDuplicate() {
    postCheckEmailData(email);
    setModalOpened(true);
  }

  function handleCloseModal() {
    setModalOpened(false);
  }

  return (
    <>
      {modalOpened ? <EmailDuplicatedModal handleCloseModal={handleCloseModal} modalMessage={modalMessage} /> : null}
      <BackButtonWrapper>
        <BackButton />
      </BackButtonWrapper>
      <ProgressBar progress={isActive ? 75 : 50} />
      <Container>
        <SignupTitleLayout>{SIGNUP_TITLE.needNameEmail}</SignupTitleLayout>

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
        {nameRegex()}

        <InputEmailWrapper $isEmail={isEmail} $emailFocus={emailFocus}>
          <TextLabelLayout labelText={SIGNUP_FIELD_LABEL.email} />
          <EmailCheckButtonWrapper>
            <Inputfield
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleEmailChange(e)}
              type="text"
              placeholder={PLACEHOLDER_TEXT.emailHolder}
            />
            <EmailCheckButton text="중복확인" emailTyped={isEmail} onClick={checkEmailDuplicate} />
          </EmailCheckButtonWrapper>
        </InputEmailWrapper>
        {emailRegex()}
      </Container>
      <BottomButton
        type="button"
        children={BUTTON_TEXT.next}
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
  margin-top: 1.8rem;
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
  width: 20rem;
  width: 20rem;
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

const EmailCheckButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BackButtonWrapper = styled.div`
  margin-left: 2rem;
`;
