import styled from "styled-components";
import { RoundBottomButton } from "../common";
import SocialLoginButton from "./SocialLoginButton";

export default function SocialLoginContent() {
  return (
    <ButtonContainer>
      <SocialLoginButton $bgcolor="#FFE500">카카오톡으로 시작하기</SocialLoginButton>
      <SocialLoginButton $bgcolor="#03C75A">네이버로 시작하기</SocialLoginButton>
    </ButtonContainer>
  );
}

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-top: 2.6rem;
`;
