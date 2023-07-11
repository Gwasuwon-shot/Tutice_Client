import { styled } from "styled-components";
interface StudentColorBoxProp {
  backgroundColor: string;
}

export default function StudentColorBox(props: StudentColorBoxProp) {
  const { backgroundColor } = props;

  return <ColorBox $backgroundColor={backgroundColor} />;
}

const ColorBox = styled.label<{ $backgroundColor: string }>`
  width: 1.3rem;
  height: 3.6rem;
  border-radius: 2px;

  background-color: ${({ $backgroundColor }) => $backgroundColor};
`;
