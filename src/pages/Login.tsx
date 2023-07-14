import { styled } from "styled-components";
import LoginHeader from "../components/login/LoginHeader";
import LoginInput from "../components/login/LoginInput";
import LoginButton from "../components/login/LoginButton";
import AccountManaging from "../components/login/AccountManaging";

export default function Login() {
  return (
    <>
      <Container>
        <LoginHeader />
        <LoginInput />
        <CenterWrapper>
          <LoginButton />
          <AccountManaging />
        </CenterWrapper>
      </Container>
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
