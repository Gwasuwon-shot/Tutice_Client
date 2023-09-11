import { styled } from "styled-components";
import LoginHeader from "../components/login/LoginHeader";
import LoginInput from "../components/login/LoginInput";
import AccountManaging from "../components/login/AccountManaging";
import { isCookieAuthenticated, isCookieNull, isLogin } from "../utils/common/isLogined";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Login() {
  const navigate = useNavigate();

  const LoginChecked = isLogin() || isCookieNull() || isCookieAuthenticated();

  useEffect(() => {
    if (LoginChecked) {
      navigate("/home");
    }
  }, [LoginChecked, navigate]);

  return (
    <>
      {LoginChecked ? null : (
        <>
          <Container>
            <LoginHeader />
          </Container>
          <CenterWrapper>
            <LoginInput />
            <AccountManaging />
          </CenterWrapper>
        </>
      )}
    </>
  );
}

const Container = styled.div`
  margin-left: 1.4rem;
`;

const CenterWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
