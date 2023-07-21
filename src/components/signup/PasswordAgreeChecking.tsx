import { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { styled } from "styled-components";
import { canViewingLoginIc, viewingLoginIc } from "../../assets";
import { newUserData } from "../../atom/signup/signup";
import { PW_REGEX } from "../../core/signup/regex";
import { SIGNUP_ERROR_MESSAGE } from "../../core/signup/signupErrorMessage";
import { SIGNUP_FIELD_LABEL } from "../../core/signup/signupLabelText";
import { PLACEHOLDER_TEXT, SIGNUP_TITLE } from "../../core/signup/signupTitle";
import BackButton from "../common/BackButton";
import ProgressBar from "../common/ProgressBar";
import AgreeChecking from "./AgreeChecking";
import RegexField from "./RegexField";
import SignupTitleLayout from "./SignupTitleLayout";
import TextLabelLayout from "./TextLabelLayout";

export default function PasswordAgreeChecking() {
  const [newUser, setNewUser] = useRecoilState(newUserData);
  const [pw, setPw] = useState("");
  const [confirmPw, setConfirmPw] = useState(" ");
  const [isPassword, setIsPassword] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [pwFocus, setPwFocus] = useState(false);
  const [confirmFocus, setConfirmFocus] = useState(false);
  const [pwViewing, setPwViewing] = useState("password");
  const [confirmViewing, setConfirmViewing] = useState("password");

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
    confirmViewing === "text" ? setConfirmViewing("password") : setConfirmViewing("text");
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
    pw.match(PW_REGEX) === null ? setIsPassword(false) : setIsPassword(true);

    pw === confirmPw ? setIsConfirmed(true) : setIsConfirmed(false);

    pw && confirmPw && isPassword && isConfirmed ? setIsActive(true) : setIsActive(false);
  }, [pw, confirmPw, isPassword, isConfirmed, newUser, setPw]);

  function handleConfirmBlur() {
    setConfirmFocus(false);
    setNewUser((prev) => ({ ...prev, password: pw }));
  }
  return (
    <>
      <ProgressBar progress={isConfirmed ? 100 : 80} />
      <BackButtonWrapper>
        <BackButton />
      </BackButtonWrapper>
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
            {viewingPwIcon()}
          </PasswordIconWrapper>
        </InputPwWrapper>

        {!isPassword && pwFocus ? <RegexField unMatchText={SIGNUP_ERROR_MESSAGE.passwordError} /> : null}

        <InputConfirmWrapper $confirmFocus={confirmFocus} $isConfirmed={isConfirmed}>
          <TextLabelLayout labelText={SIGNUP_FIELD_LABEL.confirm} />
          <PasswordIconWrapper>
            <Inputfield
              onFocus={() => setConfirmFocus(true)}
              onBlur={() => handleConfirmBlur()}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleConfirmChange(e)}
              type={confirmViewing}
              autoComplete="off"
              placeholder={PLACEHOLDER_TEXT.confirmHolder}
            />
            {viewingConfirmIcon()}
          </PasswordIconWrapper>
        </InputConfirmWrapper>

        {!isConfirmed && confirmFocus ? <RegexField unMatchText={SIGNUP_ERROR_MESSAGE.confirmError} /> : null}

        {isConfirmed ? <PasswordMatched>{SIGNUP_ERROR_MESSAGE.confirmAccept}</PasswordMatched> : null}
        <AgreeChecking />
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

  width: 90%;
  margin-top: 3.2rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.grey70};
`;

const InputPwWrapper = styled.div<{ $pwFocus: boolean; $isPassword: boolean }>`
  display: flex;
  flex-direction: column;

  width: 90%;
  margin-top: 3.2rem;
  border-bottom: 0.1rem solid
    ${({ theme, $pwFocus, $isPassword }) => ($pwFocus || $isPassword ? theme.colors.green5 : theme.colors.grey70)};
`;

const InputConfirmWrapper = styled.div<{ $confirmFocus: boolean; $isConfirmed: boolean }>`
  display: flex;
  flex-direction: column;

  width: 90%;
  margin-top: 3.2rem;
  border-bottom: 0.1rem solid
    ${({ theme, $confirmFocus, $isConfirmed }) =>
      $confirmFocus || $isConfirmed ? theme.colors.green5 : theme.colors.grey70};
`;

const Inputfield = styled.input`
  margin: 1rem 0.2rem;
  width: 23rem;
  background-color: red;

  color: ${({ theme }) => theme.colors.grey700};
  ${({ theme }) => theme.fonts.title03};

  &textarea::placeholder {
    color: ${({ theme }) => theme.colors.grey400};
    ${({ theme }) => theme.fonts.title03};
  }
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

const BackButtonWrapper = styled.div`
  margin-left: 2rem;
`;
