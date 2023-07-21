import React, { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { styled } from "styled-components";
import { setCookie } from "../../api/cookie";
import { postLocalLogin } from "../../api/localLogin";
import { canViewingLoginIc, viewingLoginIc } from "../../assets";
import { userRoleData } from "../../atom/loginUser/loginUser";
import { connectLessonId } from "../../atom/registerLesson/registerLesson";
import TextLabelLayout from "../signup/TextLabelLayout";
import LoginButton from "./LoginButton";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { stepNum } from "../../atom/signup/signup";
import RegexField from "../signup/RegexField";

export default function LoginInput() {
  const [userLogin, setUserLogin] = useState({ email: "", password: "" });
  const [isActive, setIsActive] = useState(false);
  const [email, setEmail] = useState("");
  const [emailFocus, setEmailFocus] = useState(false);
  const [password, setPassword] = useState("");
  const [pwFocus, setPwFocus] = useState(false);
  const [pwViewing, setPwViewing] = useState("password");
  const [userRole, setUserRole] = useRecoilState(userRoleData);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const lessonCode = useRecoilState(connectLessonId);
  const { mutate: postLoginData } = useMutation(postLocalLogin, {
    onSuccess: (data) => {
      console.log("성공", data.data);
      const accessToken = data.data.data.accessToken;
      setUserRole(data.data.data.user.role);
      setCookie("accessToken", accessToken, {
        secure: true,
      });
      navigate("/welcome", { state: data.data });
    },
    onError: (error) => {
      console.log(error);
      console.debug("실패 ㅠㅠ");
      setIsError(true);
    },
  });

  // setEmail
  function handelEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  //setPassword
  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  function handleLoginClick() {
    postLoginData(userLogin);
  }

  //뷰잉 상태 전환
  function handlePasswordViewing() {
    pwViewing === "text" ? setPwViewing("password") : setPwViewing("text");
  }

  // 비밀번호 텍스트 보이게 할지 안보이게 할지 로직
  function viewingIcon() {
    if (pwFocus || password) {
      if (pwViewing === "text") {
        return <CanViewingLoginIcon onClick={handlePasswordViewing} />;
      }
      return <ViewingLoginIcon onClick={handlePasswordViewing} />;
    }
    return null;
  }

  useEffect(() => {
    setUserLogin((prev) => ({ ...prev, email: email, password: password }));

    password && email ? setIsActive(true) : setIsActive(false);
  }, [email, password]);

  return (
    <form>
      <InputEmailWrapper $email={email} $emailFocus={emailFocus}>
        <TextLabelLayout labelText="이메일" />
        <Inputfield
          onFocus={() => setEmailFocus(true)}
          onBlur={() => setEmailFocus(false)}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handelEmailChange(e)}
          type="text"
          placeholder="이메일을 입력하세요."
        />
      </InputEmailWrapper>
      <InputPasswordWrapper $password={password} $pwFocus={pwFocus}>
        <TextLabelLayout labelText="비밀번호" />
        <PasswordIconWrapper>
          <Inputfield
            onFocus={() => setPwFocus(true)}
            onBlur={() => setPwFocus(false)}
            autoComplete="off"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handlePasswordChange(e)}
            type={pwViewing}
            placeholder="비밀번호를 입력하세요"
          />
          {viewingIcon()}
        </PasswordIconWrapper>
      </InputPasswordWrapper>
      <LoginButton onClick={() => handleLoginClick()} isActive={isActive} disabled={!isActive} />
      <ErrorMessage>{isError && <RegexField unMatchText={"로그인 실패 다시 시도하십시오"} />}</ErrorMessage>
    </form>
  );
}

const InputEmailWrapper = styled.div<{ $emailFocus: boolean; $email: string }>`
  display: flex;
  flex-direction: column;

  width: 95%;
  margin-right: 1.4rem;
  margin-bottom: 2rem;

  border-bottom: 0.1rem solid
    ${({ theme, $emailFocus, $email }) => ($emailFocus || $email ? theme.colors.green5 : theme.colors.grey70)};
`;

const InputPasswordWrapper = styled.div<{ $pwFocus: boolean; $password: string }>`
  display: flex;
  flex-direction: column;

  width: 95%;
  margin-right: 1.4rem;
  margin-bottom: 2rem;

  border-bottom: 0.1rem solid
    ${({ theme, $pwFocus, $password }) => ($pwFocus || $password ? theme.colors.green5 : theme.colors.grey70)};
`;

const Inputfield = styled.input`
  width: 20rem;
  height: 2rem;
  margin: 1rem 0.2rem;

  &textarea::placeholder {
    color: ${({ theme }) => theme.colors.grey400};
    ${({ theme }) => theme.fonts.title03};
  }
`;

const PasswordIconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const ErrorMessage = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 2rem;
`;
