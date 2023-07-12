import BackButton from "../common/BackButton";
import { styled } from "styled-components";
import TextLabelLayout from "./TextLabelLayout";
import SignupTitleLayout from "./SignupTitleLayout";
import Tos from "./Tos";

export default function PwTos() {
  const PWTOS_TITLE = "남은 정보들만 입력하면 \n 가입을 완료할 수 있어요!";
  return (
    <>
      <BackButton />
      <Container>
        <TitleWrapper>
          <SignupTitleLayout MainText={PWTOS_TITLE} />
        </TitleWrapper>
        <InputWrapper>
          <TextLabelLayout labelText="이름" />
          <Inputfield disabled type="text" value="이은수" />
        </InputWrapper>
        <InputWrapper>
          <TextLabelLayout labelText="이메일" />
          <Inputfield disabled type="text" value="youna429@naver.com" />
        </InputWrapper>
        <InputWrapper>
          <TextLabelLayout labelText="비밀번호" />
          <Inputfield type="text" placeholder="8~16자의 영문, 숫자, 특수문자를 사용하세요 " />
        </InputWrapper>
        <InputWrapper>
          <TextLabelLayout labelText="비밀번호 확인" />
          <Inputfield type="text" placeholder="비밀번호를 한 번 더 입력하세요" />
        </InputWrapper>
        <Tos />
      </Container>
    </>
  );
}

const Container = styled.div`
  margin-left: 1.4rem;
`;

const TitleWrapper = styled.div`
  margin-top: 0.7rem;
  margin-bottom: 3.2rem;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 29.2rem;
  margin-top: 3.2rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.grey70};
`;

const Inputfield = styled.input`
  margin: 1rem 0.2rem;

  color: ${({ theme }) => theme.colors.grey700};
  ${({ theme }) => theme.fonts.title03};

  &::placeholder {
    color: ${({ theme }) => theme.colors.grey400};
    ${({ theme }) => theme.fonts.title03};
  }
`;
