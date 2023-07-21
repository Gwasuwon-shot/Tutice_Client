import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import RoundBottomButton from "./RoundBottomButton";

export default function CreateTreeCode() {
  const navigate = useNavigate();
  function handleMakeTreeCode() {
    navigate("/register-lesson");
  }

  return (
    <CreateTreeCodeButtonWrapper onClick={handleMakeTreeCode}>
      <RoundBottomButton buttonMessage="나무코드 생성하기" />
    </CreateTreeCodeButtonWrapper>
  );
}

const CreateTreeCodeButtonWrapper = styled.section`
  margin-top: 1rem;
`;
