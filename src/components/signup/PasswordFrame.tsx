import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { styled } from "styled-components";
import { canViewingLoginIc, viewingLoginIc } from "../../assets";
import { newUserData } from "../../atom/signup/signup";
import { PW_REGEX } from "../../core/signup/regex";
import {
  BUTTON_TEXT,
  PLACEHOLDER_TEXT,
  SIGNUP_ERROR_MESSAGE,
  SIGNUP_FIELD_LABEL,
  SIGNUP_TITLE,
} from "../../core/signup/signUpTextLabels";
import BackButton from "../common/BackButton";
import ProgressBar from "../common/ProgressBar";
import { ResponseDataType } from "./AgreeChecking";
import RegexField from "./RegexField";
import SignupTitleLayout from "./SignupTitleLayout";
import TextLabelLayout from "./TextLabelLayout";
import BottomButton from "../common/BottomButton";
import { newUserPost } from "../../api/localSignUp";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { setCookie } from "../../api/cookie";
import { userRoleData } from "../../atom/loginUser/loginUser";
import { isAxiosError } from "axios";

export default function PasswordFrame() {
  const [newUser, setNewUser] = useRecoilState(newUserData);
  const [pw, setPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [isPassword, setIsPassword] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [pwFocus, setPwFocus] = useState(false);
  const [confirmFocus, setConfirmFocus] = useState(false);
  const [pwViewing, setPwViewing] = useState("password");
  const [confirmViewing, setConfirmViewing] = useState("password");
  const navigate = useNavigate();
  const [userRole, setUserRole] = useRecoilState(userRoleData);

  const { mutate: postNewUser } = useMutation(newUserPost, {
    onSuccess: (data) => {
      const accessToken = data.data.data.accessToken;
      setUserRole(data.data.data.user.role);
      setCookie("accessToken", accessToken, {
        secure: true,
      });
      navigate("/welcome", { state: data.data });
    },
    onError: (error) => {
      if (isAxiosError<ResponseDataType>(error)) {
        if (error.response) {
          const errorMessage = error.response?.data.message;
          alert(errorMessage);
        }
      }
    },
  });

  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setPw(e.target.value);
  }

  function handleConfirmChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    if (isPassword) {
      setConfirmPw(e.target.value);
    } else {
      console.log("password is NOT matched");
    }
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
        return <ViewingLoginIcon onClick={handlePasswordViewing} />;
      }
      return <CanViewingLoginIcon onClick={handlePasswordViewing} />;
    }
    return null;
  }

  function viewingConfirmIcon() {
    if (confirmFocus || confirmPw) {
      if (confirmViewing === "text") {
        return <ViewingLoginIcon onClick={handleConfirmViewing} />;
      }
      return <CanViewingLoginIcon onClick={handleConfirmViewing} />;
    }
    return null;
  }

  function passwordRegex() {
    if (pw === "") {
      return null;
    }
    if (!isPassword) {
      return <RegexField unMatchText={SIGNUP_ERROR_MESSAGE.passwordError} />;
    }
  }

  function MatchedPassword() {
    if (isPassword) {
      if (isConfirmed) {
        return <PasswordMatched>{SIGNUP_ERROR_MESSAGE.confirmAccept}</PasswordMatched>;
      } else {
        return <RegexField unMatchText={SIGNUP_ERROR_MESSAGE.confirmError} />;
      }
    }
  }

  useEffect(() => {
    pw.match(PW_REGEX) === null ? setIsPassword(false) : setIsPassword(true);

    pw === confirmPw && !(pw === "") ? setIsConfirmed(true) : setIsConfirmed(false);
  }, [pw, confirmPw, isPassword, isConfirmed, newUser, setPw]);

  function handleConfirmBlur() {
    setConfirmFocus(false);
    setNewUser((prev) => ({ ...prev, password: pw }));
  }

  useEffect(() => {}, [newUser, pw, confirmPw]);

  function handleDoneClick() {
    postNewUser(newUser);
  }

  return (
    <>
      <BackButtonWrapper>
        <BackButton />
      </BackButtonWrapper>
      <ProgressBar progress={isConfirmed ? 100 : 80} />
      <Container>
        <TitleWrapper>
          <SignupTitleLayout>{SIGNUP_TITLE.leftInfo}</SignupTitleLayout>
        </TitleWrapper>

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
        {passwordRegex()}

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

        {MatchedPassword()}
      </Container>
      <BottomButton
        type="button"
        children={BUTTON_TEXT.done}
        isActive={isConfirmed}
        onClick={handleDoneClick}
        disabled={!isConfirmed}
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

const TitleWrapper = styled.div`
  margin-top: 0.7rem;
  margin-bottom: 3.2rem;
`;

const InputPwWrapper = styled.div<{ $pwFocus: boolean; $isPassword: boolean }>`
  display: flex;
  flex-direction: column;

  width: 90%;
  border-bottom: 0.1rem solid
    ${({ theme, $pwFocus, $isPassword }) => ($pwFocus || $isPassword ? theme.colors.green5 : theme.colors.grey70)};
`;

const InputConfirmWrapper = styled.div<{ $confirmFocus: boolean; $isConfirmed: boolean }>`
  display: flex;
  flex-direction: column;

  width: 90%;
  margin-top: 2rem;
  border-bottom: 0.1rem solid
    ${({ theme, $confirmFocus, $isConfirmed }) =>
      $confirmFocus || $isConfirmed ? theme.colors.green5 : theme.colors.grey70};
`;

const Inputfield = styled.input`
  margin: 1rem 0.2rem;
  width: 24rem;

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
  /* justify-content: space-between; */
  align-items: center;
`;

const BackButtonWrapper = styled.div`
  margin-left: 2rem;
`;
