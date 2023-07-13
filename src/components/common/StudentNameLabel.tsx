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
  margin-right: 0.5rem;
  ${({ theme, $isBig }) => ($isBig ? theme.fonts.title01 : theme.fonts.title02)};
`;

const StudentNameWrapper = styled.header`
  display: flex;
  align-items: center;
`;

const Student = styled.p`
  margin-right: 0.5rem;
  ${({ theme }) => theme.fonts.title03};
`;
