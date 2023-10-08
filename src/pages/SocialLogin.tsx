import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import SocialLoginHeader from "../components/login/SocialLoginHeader";
import SocialLoginContent from "../components/login/SocialLoginContent";
import SocialLoginManaging from "../components/login/SocialLoginManaging";
import { isCookieAuthenticated, isCookieNull, isLogin } from "../utils/common/isLogined";

export default function SocialLogin() {
  const navigate = useNavigate();

  //f 로그인 되어 있는지 확인
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
            <SocialLoginHeader />
          </Container>
          <CenterWrapper>
            <SocialLoginContent />
            <SocialLoginManaging />
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
