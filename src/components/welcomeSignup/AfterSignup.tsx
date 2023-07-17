import { styled } from "styled-components";
import { TuticeWithTextCommonIc } from "../../assets";

export default function AfterSignup() {
  return (
    <div>
      <TuticeWithTextCommonIcon />
    </div>
  );
}

const TuticeWithTextCommonIcon = styled(TuticeWithTextCommonIc)`
  width: 10rem;
  height: 3.3rem;
  margin-bottom: 1.3rem;
  flex-shrink: 0;
`;
