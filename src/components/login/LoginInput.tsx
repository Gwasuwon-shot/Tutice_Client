import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import TextLabelLayout from "../signup/TextLabelLayout";
import { ViewingLoginIc } from "../../assets";

export default function LoginInput() {
  // 임시 recoil로 만들어라
  const [userLogin, setUserLogin] = useState([]);
  const [email, setEmail] = useState("");
  const [emailFocus, setEmailFocus] = useState(false);
  const [password, setPassword] = useState("");
  const [pwFocus, setPwFocus] = useState(false);
  const [pwViewing, setPwViewing] = useState(false);
  const [isActive, setIsActive] = useState(false);

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

  useEffect(() => {
    console.log(password);
    // 버튼 활성화

    // 비밀번호 뷰잉 활성화
    password ? setPwViewing(false) : setPwViewing(true);
  }, []);

  return (
    <>
      <InputEmailWrapper $emailFocus={emailFocus}>
        <TextLabelLayout labelText="이메일" />
        <Inputfield
          onFocus={() => setEmailFocus(true)}
          onChange={(e) => handelEmailChange(e)}
          type="text"
          placeholder="이메일을 입력하세요."
        />
      </InputEmailWrapper>
      <InputPasswordWrapper $pwFocus={pwFocus}>
        <TextLabelLayout labelText="비밀번호" />
        <PasswordIconWrapper>
          <Inputfield
            onFocus={() => setPwFocus(true)}
            onChange={(e) => handlePasswordChange(e)}
            type="password"
            placeholder="비밀번호를 입력하세요"
          />
          {pwViewing ? <ViewingLoginIcon /> : null}
        </PasswordIconWrapper>
      </InputPasswordWrapper>
    </>
  );
}

const InputEmailWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-right: 1.4rem;
  margin-bottom: 2rem;

  border-bottom: 0.1rem solid ${({ theme, $emailFocus }) => ($emailFocus ? theme.colors.green5 : theme.colors.grey70)};
`;

const InputPasswordWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-right: 1.4rem;
  margin-bottom: 2rem;

  border-bottom: 0.1rem solid ${({ theme, $pwFocus }) => ($pwFocus ? theme.colors.green5 : theme.colors.grey70)};
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

  width: 29rem;
`;

const ViewingLoginIcon = styled(ViewingLoginIc)`
  width: 1.6rem;
  height: 1.6rem;
  margin-right: 0.6rem;
  flex-shrink: 0;
`;
