import styled from "styled-components";
import { RoundBottomButton } from "../common";
import SocialLoginButton from "./SocialLoginButton";

export default function SocialLoginContent() {

  function yetAlert {
    alert("해당 서비스는 아직 사용 불가능합니다. 이메일로 로그인 해주세요 ")
  }

  return (
    <ButtonContainer>
      <SocialLoginButton onclick={yetAlert} $bgcolor="#FFE500">
        카카오톡으로 시작하기
      </SocialLoginButton>
      <SocialLoginButton onclick={yetAlert} $bgcolor="#03C75A">네이버로 시작하기</SocialLoginButton>
    </ButtonContainer>
  );
}

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-top: 2.6rem;
`;
