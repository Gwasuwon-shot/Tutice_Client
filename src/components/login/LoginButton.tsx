import { styled } from "styled-components";

export default function LoginButton() {
  return <Button> 로그인 </Button>;
}

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 29.2rem;
  height: 5rem;
  padding: 0.8rem;
  border-radius: 8px;
  flex-shrink: 0;

  gap: 0.8rem;

  background-color: ${({ theme }) => theme.colors.grey50};
  color: ${({ theme }) => theme.colors.grey200};
`;
