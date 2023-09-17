import styled from "styled-components";
import AgreeChecking from "./AgreeChecking";
import SignupTitleLayout from "./SignupTitleLayout";
import BackButton from "../common/BackButton";
import ProgressBar from "../common/ProgressBar";

export default function AgreeCheckingFrame() {
  return (
    <>
      <BackButtonWrapper>
        <BackButton />
      </BackButtonWrapper>
      <ProgressBar progress={isActive ? 50 : 25} />
      <Container>
        <SignupTitleLayout>
          {userRole} <br />
          안녕하세요!
        </SignupTitleLayout>
        <PlainText>
          서비스 시작 및 가입을 위해 먼저 <br />
          가입 및 정보 제공에 동의해 주세요
        </PlainText>
      </Container>
    </>
  );
}

const PlainText = styled.label`
  margin-top: 0.3rem;
  margin-bottom: 2.7rem;
  color: ${({ theme }) => theme.colors.grey600};
  ${({ theme }) => theme.fonts.body04};

  white-space: pre-wrap;
`;

const BackButtonWrapper = styled.div`
  margin-left: 2rem;
`;

const Container = styled.div`
  margin-top: 1.8rem;
`;
