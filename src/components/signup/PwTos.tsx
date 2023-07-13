import BackButton from "../common/BackButton";
import Tos from "./Tos";
import { styled } from "styled-components";
import TextLabelLayout from "./TextLabelLayout";
import SignupTitleLayout from "./SignupTitleLayout";
import BottomButton from "../common/BottomButton";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { newUserData } from "../../atom/signup/signup";
import { PW_REGEX } from "../../core/signup/regex";
import RegexField from "./RegexField";

export default function PwTos() {
  const [pwRegex, setPwRegex] = useState(false);
  const [pw, setPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [isActive, setIsActive] = useState(false);
  const newUser = useRecoilValue(newUserData);
  const PWTOS_TITLE = "남은 정보들만 입력하면 \n 가입을 완료할 수 있어요!";

  function handleToSignUp() {
    console.log("회원가입요~");
  }

  function checkPassword(pw: string) {
    if (pw.match(PW_REGEX) === null) {
      setPwRegex(false);
      console.log("비밀번호 형식 틀림~");
    } else {
      setPwRegex(true);
      console.log("비밀번호 형식 맞음~");
    }
  }

  function handlePWChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setPw(e.target.value);
  }

  function handleConfirmChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setConfirmPw(e.target.value);
  }

  useEffect(() => {
    console.log(pw, confirmPw);
    // pw === confirmPw ? setIsActive(true) : setIsActive(false);
  }, [pw, confirmPw]);

  return (
    <>
      <BackButton />
      <Container>
        <TitleWrapper>
          <SignupTitleLayout MainText={PWTOS_TITLE} />
        </TitleWrapper>
        <InputWrapper>
          <TextLabelLayout labelText="이름" />
          <Inputfield disabled type="text" value={newUser.name} />
        </InputWrapper>
        <InputWrapper>
          <TextLabelLayout labelText="이메일" />
          <Inputfield disabled type="text" value={newUser.email} />
        </InputWrapper>
        <InputWrapper>
          <TextLabelLayout labelText="비밀번호" />
          <Inputfield
            // onChange={(e: React.ChangeEvent<HTMLInputElement>) => handlePWChange(e)}
            onClick={(e: React.ChangeEvent<HTMLInputElement>) => checkPassword(e.target.value)}
            type="text"
            placeholder="8~16자의 영문, 숫자, 특수문자를 사용하세요 "
          />
        </InputWrapper>
        {pwRegex ? null : <RegexField unMatchText="8~16자의 영문, 숫자, 특수문자를 모두 포함해주세요." />}

        <InputWrapper>
          <TextLabelLayout labelText="비밀번호 확인" />
          <Inputfield
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleConfirmChange(e)}
            type="text"
            placeholder="비밀번호를 한 번 더 입력하세요"
          />
        </InputWrapper>
        <Tos />
        <BottomButton isActive={isActive} children="회원가입 완료" onClick={handleToSignUp} />
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

const TitleWrapper = styled.div`
  margin-top: 0.7rem;
  margin-bottom: 3.2rem;
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

  color: ${({ theme }) => theme.colors.grey700};
  ${({ theme }) => theme.fonts.title03};

  &::placeholder {
    color: ${({ theme }) => theme.colors.grey400};
    ${({ theme }) => theme.fonts.title03};
  }
`;
