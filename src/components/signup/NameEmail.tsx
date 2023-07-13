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
  const NAME_TEXT = "가입을 위해 \n 이름과 이메일이 필요해요";

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
      <ProgressBar progress={email === "" ? 25 : 50} />
      <BackButton />
      <Container>
        <SignupTitleLayout MainText={NAME_TEXT} />
        <InputNameWrapper $isName={isName} $nameFocus={nameFocus}>
          <TextLabelLayout labelText={"이름"} />
          <Inputfield
            onFocus={() => setNameFocus(true)}
            onBlur={() => setNameFocus(false)}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleNameChange(e)}
            type="text"
            placeholder="이름을 입력하세요"
          />
        </InputNameWrapper>
        {!isName && nameFocus ? (
          <RegexField
            unMatchText="
        이름은 최소 2자 이상 입력해주세요."
          />
        ) : null}
        <InputEmailWrapper $isEmail={isEmail} $emailFocus={emailFocus}>
          <TextLabelLayout labelText={"이메일"} />
          <Inputfield
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleEmailChange(e)}
            type="text"
            placeholder="사용하실 이메일을 입력하세요"
          />
        </InputEmailWrapper>

        {!isEmail && emailFocus ? <RegexField unMatchText="올바른 이메일 형식으로 입력해 주세요." /> : null}
        <BottomButton children="완료" isActive={isActive} onClick={handleDoneClick} disabled={!isActive} />
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

const InputNameWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 29.2rem;
  margin-top: 3.2rem;

  border-bottom: 0.1rem solid
    ${({ theme, $nameFocus, $isName }) => ($nameFocus || $isName ? theme.colors.green5 : theme.colors.grey70)};
`;

const InputEmailWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 29.2rem;
  margin-top: 3.2rem;

  border-bottom: 0.1rem solid
    ${({ theme, $emailFocus, $isEmail }) => ($emailFocus || $isEmail ? theme.colors.green5 : theme.colors.grey70)};
`;

const Inputfield = styled.input`
  margin: 1rem 0.2rem;

  &::placeholder {
    color: ${({ theme }) => theme.colors.grey400};
    ${({ theme }) => theme.fonts.title03};
  }
`;
