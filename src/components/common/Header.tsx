import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { TuticeWithTextCommonIc } from "../../assets";

export default function Header() {
  const navigate = useNavigate();

  function handleMoveToHome() {
    navigate("/");
  }

  return (
    <HeaderWrapper>
      <TuticeWithTextCommonIcon onClick={handleMoveToHome} />
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  width: 100%;
`;

const TuticeWithTextCommonIcon = styled(TuticeWithTextCommonIc)`
  width: 8.9rem;
  height: 3.5rem;
`;
