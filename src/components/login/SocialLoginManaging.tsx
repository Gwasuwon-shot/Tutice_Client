import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

export default function SocialLoginManaging() {
  const navigate = useNavigate();

  function handleOnLocalLogin() {
    navigate("/login");
  }

  function handleToLocalSignup() {
    navigate("/signup");
  }
  return (
    <Container>
      <TextWrapper>
        <Text onClick={handleOnLocalLogin}>이메일로 로그인</Text>
        <VerticalLine />
        <Text onClick={handleToLocalSignup}>이메일로 가입</Text>
      </TextWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 2.6rem;
`;

const TextWrapper = styled.div`
  display: flex;
  row-gap: 0.8rem;

  color: ${({ theme }) => theme.colors.grey600};
  ${({ theme }) => theme.fonts.body05};
`;

const VerticalLine = styled.div`
  margin-top: 0.3rem;
  width: 0.1rem;
  height: 1rem;

  border-right: 0.1rem solid ${({ theme }) => theme.colors.grey300};
`;

const Text = styled.p`
  margin: 0rem 1.5rem;
  color: ${({ theme }) => theme.colors.grey600};

  text-decoration: underline;
  text-underline-offset: 0.2rem;
`;
