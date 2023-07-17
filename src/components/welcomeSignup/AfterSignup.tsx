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
  width: 16.6rem;
  height: 5.5rem;
  margin-bottom: 2.8rem;
  margin-left: -1.4rem;
  flex-shrink: 0;
`;
