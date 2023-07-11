import { styled } from "styled-components";

interface SubjectLabelProps {
  subject: string;
  backgroundColor: string;
  color: string;
}

export default function SubjectLabel(props: SubjectLabelProps) {
  return (
    <SubjectBox $backgroundColor={backgroundColor} $color={color}>
      {subject}
    </SubjectBox>
  );
}

const SubjectBox = styled.span<{ $backgroundColor: string; $color: string }>`
  padding: 0.2rem 0.6rem;

  color: ${({ $color }) => $color};
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  ${({ theme }) => theme.fonts.caption01}
`;
