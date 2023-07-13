import { styled } from "styled-components";
import SubjectLabel from "./SubjectLabel";

interface StudentNameLabelProps {
  studentName: string;
  subject: string;
  backgroundColor: string;
  color: string;
}

export default function StudentNameLabel(props: StudentNameLabelProps) {
  const { studentName, subject, backgroundColor, color } = props;

  return (
    <StudentNameWrapper>
      <StudentName>{studentName}</StudentName>
      <Student>학생</Student>
      <SubjectLabel subject={subject} backgroundColor={backgroundColor} color={color} />
    </StudentNameWrapper>
  );
}

const StudentName = styled.h1`
  ${({ theme }) => theme.fonts.title01};
`;

const StudentNameWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 10.8rem;
`;

const Student = styled.p`
  ${({ theme }) => theme.fonts.title02};
`;
