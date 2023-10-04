import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { BackButtonSignupIc } from "../../assets";

export default function CommonBackButton() {
  const navigate = useNavigate();

  function handleMoveToBack() {
    navigate(-1);
  }

  return (
    <>
      <BackButtonSignupIcon onClick={handleMoveToBack} />
    </>
  );
}
const BackButtonSignupIcon = styled(BackButtonSignupIc)`
  width: 4rem;
  height: 4rem;
  margin-left: -0.4rem;
`;
