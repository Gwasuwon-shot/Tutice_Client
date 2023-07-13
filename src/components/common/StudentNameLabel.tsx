import { styled } from "styled-components";
import SubjectLabel from "./SubjectLabel";

interface StudentNameLabelProps {
  studentName: string;
  subject: string;
  backgroundColor: string;
  color: string;
  isBig: boolean;
}

export default function StudentNameLabel(props: StudentNameLabelProps) {
  const { studentName, subject, backgroundColor, color, isBig } = props;

  return (
    <StudentNameWrapper>
      <StudentName $isBig={isBig}>{studentName}</StudentName>
      <Student>학생</Student>
      <SubjectLabel subject={subject} backgroundColor={backgroundColor} color={color} />
    </StudentNameWrapper>
  );
}

const StudentName = styled.h1<{ $isBig: boolean }>`
  ${({ theme, $isBig }) => ($isBig ? theme.fonts.title01 : theme.fonts.title02)};
`;

const StudentNameWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: ${({ $isBig }) => ($isBig ? 12 : 10.8)}rem;
`;

const Student = styled.p`
  ${({ theme }) => theme.fonts.title03};
`;
