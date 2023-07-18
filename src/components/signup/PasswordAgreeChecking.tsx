import BackButton from "../common/BackButton";
import { styled } from "styled-components";
import TextLabelLayout from "./TextLabelLayout";
import SignupTitleLayout from "./SignupTitleLayout";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { newUserData } from "../../atom/signup/signup";
import { PW_REGEX } from "../../core/signup/regex";
import RegexField from "./RegexField";
import ProgressBar from "../common/ProgressBar";
import { PLACEHOLDER_TEXT, SIGNUP_TITLE } from "../../core/signup/signupTitle";
import { BUTTON_TEXT } from "../../core/signup/buttonText";
import { SIGNUP_FIELD_LABEL } from "../../core/signup/signupLabelText";
import { SIGNUP_ERROR_MESSAGE } from "../../core/signup/signupErrorMessage";
import AgreeChecking from "./AgreeChecking";
import { viewingLoginIc, canViewingLoginIc } from "../../assets";

export default function PasswordAgreeChecking() {
  const newUser = useRecoilValue(newUserData);
  const [pw, setPw] = useState("");
  const [confirmPw, setConfirmPw] = useState(" ");
  const [isPassword, setIsPassword] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [pwFocus, setPwFocus] = useState(false);
  const [confirmFocus, setConfirmFocus] = useState(false);
  const [pwViewing, setPwViewing] = useState("password");
  const [confirmViewing, setConfirmViewing] = useState("password");

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

  function handlePasswordViewing() {
    pwViewing === "text" ? setPwViewing("password") : setPwViewing("text");
  }
  function handleConfirmViewing() {
    pwViewing === "text" ? setPwViewing("password") : setPwViewing("text");
  }

  function viewingPwIcon() {
    if (pwFocus || pw) {
      if (pwViewing === "text") {
        return <CanViewingLoginIcon onClick={handlePasswordViewing} />;
      }
      return <ViewingLoginIcon onClick={handlePasswordViewing} />;
    }
    return null;
  }

  function viewingConfirmIcon() {
    if (confirmFocus || confirmPw) {
      if (confirmViewing === "text") {
        return <CanViewingLoginIcon onClick={handleConfirmViewing} />;
      }
      return <ViewingLoginIcon onClick={handleConfirmViewing} />;
    }
    return null;
  }
  useEffect(() => {
    // 비밀번호 정규식 체크
    pw.match(PW_REGEX) === null ? setIsPassword(false) : setIsPassword(true);
    console.log(isPassword);

    // 비밀번호 일치 체크
    pw === confirmPw ? setIsConfirmed(true) : setIsConfirmed(false);

    // 비밀번호 중복 및 정규식 확인 : 버튼 활성화
    pw && confirmPw && isPassword && isConfirmed ? setIsActive(true) : setIsActive(false);
  }, [pw, confirmPw, isPassword, isConfirmed]);

  return (
    <>
      <ProgressBar progress={75} />
      <BackButton />
      <Container>
        <TitleWrapper>
          <SignupTitleLayout MainText={SIGNUP_TITLE.leftInfo} />
        </TitleWrapper>

        <InputWrapper>
          <TextLabelLayout labelText={SIGNUP_FIELD_LABEL.name} />
          <Inputfield disabled type="text" value={newUser.name} />
        </InputWrapper>

        <InputWrapper>
          <TextLabelLayout labelText={SIGNUP_FIELD_LABEL.email} />
          <Inputfield disabled type="text" value={newUser.email} />
        </InputWrapper>

        <InputPwWrapper $isPassword={isPassword} $pwFocus={pwFocus}>
          <TextLabelLayout labelText={SIGNUP_FIELD_LABEL.password} />
          <PasswordIconWrapper>
            <Inputfield
              onFocus={() => setPwFocus(true)}
              onBlur={() => setPwFocus(false)}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handlePasswordChange(e)}
              type={pwViewing}
              autoComplete="off"
              placeholder={PLACEHOLDER_TEXT.passwordHolder}
            />
            {viewingIcon()}
          </PasswordIconWrapper>
        </InputPwWrapper>

        {!isPassword && pwFocus ? <RegexField unMatchText={SIGNUP_ERROR_MESSAGE.passwordError} /> : null}

        <InputConfirmWrapper $confirmFocus={confirmFocus} $isConfirmed={isConfirmed}>
          <TextLabelLayout labelText={SIGNUP_FIELD_LABEL.confirm} />
          <PasswordIconWrapper>
            <Inputfield
              onFocus={() => setConfirmFocus(true)}
              onBlur={() => setConfirmFocus(false)}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleConfirmChange(e)}
              type={pwViewing}
              autoComplete="off"
              placeholder={PLACEHOLDER_TEXT.confirmHolder}
            />
            {viewingConfirmIcon()}
          </PasswordIconWrapper>
        </InputConfirmWrapper>

        {!isConfirmed && confirmFocus ? <RegexField unMatchText={SIGNUP_ERROR_MESSAGE.confirmError} /> : null}

        {isConfirmed ? <PasswordMatched>{SIGNUP_ERROR_MESSAGE.confirmAccept}</PasswordMatched> : null}

        <AgreeChecking />

        <SubmitButton type="submit" disabled={!isActive} $isActive={isActive} onClick={handleToSignUp}>
          <ButtonText>{BUTTON_TEXT.signupDone}</ButtonText>
        </SubmitButton>
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

  width: 23.2rem;
  margin-top: 3.2rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.grey70};
`;

const InputPwWrapper = styled.div<{ $pwFocus: boolean; $isPassword: boolean }>`
  display: flex;
  flex-direction: column;

  width: 29.2rem;
  margin-top: 3.2rem;
  border-bottom: 0.1rem solid
    ${({ theme, $pwFocus, $isPassword }) => ($pwFocus || $isPassword ? theme.colors.green5 : theme.colors.grey70)};
`;

const InputConfirmWrapper = styled.div<{ $confirmFocus: boolean; $isConfirmed: boolean }>`
  display: flex;
  flex-direction: column;

  width: 29.2rem;
  margin-top: 3.2rem;
  border-bottom: 0.1rem solid
    ${({ theme, $confirmFocus, $isConfirmed }) =>
      $confirmFocus || $isConfirmed ? theme.colors.green5 : theme.colors.grey70};
`;

const Inputfield = styled.input`
  margin: 1rem 0.2rem;
  width: 30rem;

  color: ${({ theme }) => theme.colors.grey700};
  ${({ theme }) => theme.fonts.title03};

  &::placeholder {
    color: ${({ theme }) => theme.colors.grey400};
    ${({ theme }) => theme.fonts.title03};
  }
`;

const SubmitButton = styled.button<{ $isActive: boolean }>`
  position: fixed;
  bottom: 0;

  width: 31.8rem;
  height: 6.3rem;
  margin-left: -1.6rem;

  background-color: ${({ theme, $isActive }) => ($isActive ? theme.colors.green5 : theme.colors.grey50)};
  color: ${({ theme, $isActive }) => ($isActive ? theme.colors.grey0 : theme.colors.grey200)};

  ${({ theme }) => theme.fonts.body01};
`;
const ButtonText = styled.p`
  position: relative;

  /* top- 정확한 값으로 수정 필요 */
  top: -1rem;
  ${({ theme }) => theme.fonts.body01};
`;

const PasswordMatched = styled.p`
  margin-top: 0.5rem;
  margin-left: 0.2rem;

  color: ${({ theme }) => theme.colors.green5};

  ${({ theme }) => theme.fonts.body06};
`;
const ViewingLoginIcon = styled(viewingLoginIc)`
  width: 1.6rem;
  height: 1.6rem;
  margin-right: 0.6rem;
  flex-shrink: 0;
`;

const CanViewingLoginIcon = styled(canViewingLoginIc)`
  width: 1.6rem;
  height: 1.6rem;
  margin-right: 0.6rem;
  flex-shrink: 0;
`;

const PasswordIconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
