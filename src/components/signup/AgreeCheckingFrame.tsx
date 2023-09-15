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
      <ProgressBar progress={50} />
      <Container>
        <SignupTitleLayout MainText="선생님 \n 안녕하세요!" />
        <PlainText>서비스 시작 및 가입을 위해 먼저 가입 및 정보 제공에 동의해 주세요 </PlainText>
        <AgreeChecking />
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
