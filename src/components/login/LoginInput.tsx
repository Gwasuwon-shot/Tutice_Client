import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import TextLabelLayout from "../signup/TextLabelLayout";
import { viewingLoginIc, canViewingLoginIc } from "../../assets";

export default function LoginInput() {
  // 임시 recoil로 만들어라
  const [userLogin, setUserLogin] = useState([]);
  const [email, setEmail] = useState("");
  const [emailFocus, setEmailFocus] = useState(false);
  const [password, setPassword] = useState("");
  const [pwFocus, setPwFocus] = useState(false);
  const [pwViewing, setPwViewing] = useState("password");

  // setEmail
  function handelEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  //setPassword
  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  //데이터 전달
  function handleLoginClick() {
    setUserLogin((prev) => ({ ...prev, email: email, password: password }));
  }

  //뷰잉 상태 전환
  function handlePasswordViewing() {
    pwViewing === "text" ? setPwViewing("password") : setPwViewing("text");
  }

  // 뷰잉 상황 정리
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
    console.log(password);
    // 버튼 활성화
  }, []);

  return (
    <>
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
          <form>
            <Inputfield
              onFocus={() => setPwFocus(true)}
              onBlur={() => setPwFocus(false)}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handlePasswordChange(e)}
              type={pwViewing}
              placeholder="비밀번호를 입력하세요"
            />
          </form>
          {viewingIcon()}
        </PasswordIconWrapper>
      </InputPasswordWrapper>
    </>
  );
}

const InputEmailWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 80%;
  margin-right: 1.4rem;
  margin-bottom: 2rem;

  border-bottom: 0.1rem solid
    ${({ theme, $emailFocus, $email }) => ($emailFocus || $email ? theme.colors.green5 : theme.colors.grey70)};
`;

const InputPasswordWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 80%;
  margin-right: 1.4rem;
  margin-bottom: 2rem;

  border-bottom: 0.1rem solid
    ${({ theme, $pwFocus, $password }) => ($pwFocus || $password ? theme.colors.green5 : theme.colors.grey70)};
`;

const Inputfield = styled.input`
  width: 20rem;
  margin: 1rem 0.2rem;

  &::placeholder {
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
