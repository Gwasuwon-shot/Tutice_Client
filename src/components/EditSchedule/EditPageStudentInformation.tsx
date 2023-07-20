import styled from "styled-components";
import { STUDENT_COLOR } from "../../core/common/studentColor";

import { useRecoilValue } from "recoil";
import { RegularLessonStudentIc } from "../../assets";
import { editSchedule } from "../../atom/EditSchedule/editSchedule";
import SubjectLabel from "../common/SubjectLabel";

export default function StudentInformation() {
  const { studentName, subject, idx } = useRecoilValue(editSchedule);

  return (
    <StudentInformationWrapper>
      <IconWrapper>
        <RegularLessonStudentIcon />
        <SectionName> 학생정보 </SectionName>
      </IconWrapper>
      <StudentWrapper>
        <StudentName> {studentName} </StudentName>
        <SubjectLabel subject={subject} backgroundColor={STUDENT_COLOR[idx % 10]} color="#5B6166" />
      </StudentWrapper>
    </StudentInformationWrapper>
  );
}

const StudentInformationWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const IconWrapper = styled.div`
  display: flex;

  height: 2.8rem;
`;

const RegularLessonStudentIcon = styled(RegularLessonStudentIc)`
  margin-top: 1.2rem;
  margin-left: 1.7rem;
`;

const SectionName = styled.h1`
  margin-left: 0.8rem;
  margin-top: 1.1rem;

  ${({ theme }) => theme.fonts.body04};
  color: ${({ theme }) => theme.colors.grey600};
`;

const StudentWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 28.8rem;
  height: 5rem;
  margin-left: 1.5rem;

  border-bottom: 1px solid ${({ theme }) => theme.colors.grey50};
`;

const StudentName = styled.h2`
  margin-left: 0.8rem;
  margin-right: 0.4rem;

  ${({ theme }) => theme.fonts.body01};
  color: ${({ theme }) => theme.colors.grey700};
`;
