import BackButton from "../common/BackButton";
import Tos from "./Tos";
import { styled } from "styled-components";
import TextLabelLayout from "./TextLabelLayout";
import SignupTitleLayout from "./SignupTitleLayout";
import BottomButton from "../common/BottomButton";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { newUserData } from "../../atom/signup/signup";
import { PW_REGEX } from "../../core/signup/regex";
import RegexField from "./RegexField";
import ProgressBar from "../common/ProgressBar";

export default function PwTos() {
  const newUser = useRecoilValue(newUserData);
  const [pw, setPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [isPassword, setIsPassword] = useState(false);
  const [doubleCheck, setDoubleCheck] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [pwFocus, setPwFocus] = useState(false);
  const [confirmFocus, setConfirmFocus] = useState(false);
  const PWTOS_TITLE = "남은 정보들만 입력하면 \n 가입을 완료할 수 있어요!";

  function handleToSignUp() {
    console.log("회원가입요~");
  }

  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setPw(e.target.value);
  }

  function handleConfirmChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setConfirmPw(e.target.value);
  }

  useEffect(() => {
    console.log(pw, confirmPw);
    // 비밀번호 정규식 체크
    pw.match(PW_REGEX) === null ? setIsPassword(false) : setIsPassword(true);

    // 비밀번호 일치 체크
    pw === confirmPw ? setDoubleCheck(true) : setDoubleCheck(false);

    // 비밀번호 중복 및 정규식 확인 : 버튼 활성화
    pw && confirmPw && isPassword && doubleCheck ? setIsActive(true) : setIsActive(false);
  }, [pw, confirmPw, isPassword, doubleCheck]);

  return (
    <>
      <ProgressBar progress={75} />
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
        <InputPwWrapper $isPassword={isPassword} $pwFocus={setPwFocus}>
          <TextLabelLayout labelText="비밀번호" />
          <Inputfield
            onFocus={() => setPwFocus(true)}
            onBlur={() => setPwFocus(false)}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handlePasswordChange(e)}
            type="text"
            placeholder="8~16자의 영문, 숫자, 특수문자를 사용하세요 "
          />
        </InputPwWrapper>
        {!isPassword && pwFocus ? (
          <RegexField unMatchText="8~16자의 영문, 숫자, 특수문자를 모두 포함해주세요." />
        ) : null}

        <InputConfirmWrapper $confirmFocus={confirmFocus} $doubleCheck={doubleCheck}>
          <TextLabelLayout labelText="비밀번호 확인" />
          <Inputfield
            onFocus={() => setConfirmFocus(true)}
            onBlur={() => setConfirmFocus(false)}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleConfirmChange(e)}
            type="text"
            placeholder="비밀번호를 한 번 더 입력하세요"
          />
        </InputConfirmWrapper>
        {!doubleCheck && confirmFocus ? <RegexField unMatchText="비밀번호가 일치하지 않아요." /> : null}
        <Tos />
        <BottomButton disabled={!isActive} isActive={isActive} children="회원가입 완료" onClick={handleToSignUp} />
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

const InputPwWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 29.2rem;
  margin-top: 3.2rem;
  border-bottom: 0.1rem solid
    ${({ theme, $pwFocus, $isPassword }) => ($pwFocus || $isPassword ? theme.colors.green5 : theme.colors.grey70)};
`;

const InputConfirmWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 29.2rem;
  margin-top: 3.2rem;
  border-bottom: 0.1rem solid
    ${({ theme, $confirmFocus, $doubleCheck }) =>
      $confirmFocus || $doubleCheck ? theme.colors.green5 : theme.colors.grey70};
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
