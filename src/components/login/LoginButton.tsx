import { styled } from "styled-components";

export default function LoginButton() {
  return <Button></Button>;
}

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 29.2rem;
  height: 5rem;
  padding: 0.8rem;
  gap: 0.8rem;
  flex-shrink: 0;
`;
