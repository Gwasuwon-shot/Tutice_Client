import { styled } from "styled-components";
import {
  FifthTreeParentsHomeIc,
  FirstTreeParentsHomeIc,
  FourthTreeParentsHomeIc,
  RightArrowParentsHomeIc,
  SecondTreeParentsHomeIc,
  ThirdTreeParentsHomeIc,
} from "../../assets";
import SubjectLabel from "../common/SubjectLabel";

interface ClassScheduleProps {
  subjectName: string;
  teacherName: string;
  studentName: string;
  entireClassCount: number;
  currentClassCount: number;
  currentClassCountPercent: number;
  subjectLabelBackgroundColor: string;
}

export default function ClassSchedule(props: ClassScheduleProps) {
  const {
    subjectName,
    teacherName,
    studentName,
    entireClassCount,
    currentClassCount,
    currentClassCountPercent,
    subjectLabelBackgroundColor,
  } = props;
  let ProgressTree = <FirstTreeParentsHomeIc />;

  if (currentClassCountPercent <= 20) {
    ProgressTree = <FirstTreeParentsHomeIc />;
  } else if (currentClassCountPercent > 20 && currentClassCountPercent <= 40) {
    ProgressTree = <SecondTreeParentsHomeIc />;
  } else if (currentClassCountPercent > 40 && currentClassCountPercent <= 60) {
    ProgressTree = <ThirdTreeParentsHomeIc />;
  } else if (currentClassCountPercent > 60 && currentClassCountPercent <= 80) {
    ProgressTree = <FourthTreeParentsHomeIc />;
  } else {
    ProgressTree = <FifthTreeParentsHomeIc />;
  }

  return (
    <ClassScheduleWrapper>
      <StudentInfoWrapper>
        <ProgressTreeIconWrapper> {ProgressTree}</ProgressTreeIconWrapper>
        <StudentNameWrapper>{studentName}</StudentNameWrapper>
      </StudentInfoWrapper>
      <ClassDetailInfoWrapper>
        <TeacherSubjectWrapper>
          <SubjectLabel subject={subjectName} backgroundColor={subjectLabelBackgroundColor} color="#5B6166" />
          <TeacherName>{teacherName} 선생님</TeacherName>
        </TeacherSubjectWrapper>
        <ClassCountMessage>
          {currentClassCount}회차 <EntireCountMessage>/ {entireClassCount}회차</EntireCountMessage>
        </ClassCountMessage>
      </ClassDetailInfoWrapper>
      <RightArrowParentsHomeIcon />
    </ClassScheduleWrapper>
  );
}

const ClassScheduleWrapper = styled.section`
  display: flex;
  align-items: center;

  width: 26.1rem;
  height: 5.9rem;
`;

const StudentInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 0.2rem;
`;

const ProgressTreeIconWrapper = styled.div`
  width: 3.2rem;

  > svg {
    width: 100%;
  }
`;

const StudentNameWrapper = styled.p`
  ${({ theme }) => theme.fonts.caption01};
  color: ${({ theme }) => theme.colors.grey600};
`;

const ClassDetailInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 2.3rem;

  gap: 0.7rem;
`;

const TeacherSubjectWrapper = styled.div`
  display: flex;
  gap: 0.6rem;
`;

const TeacherName = styled.p`
  ${({ theme }) => theme.fonts.body04};
  color: ${({ theme }) => theme.colors.grey600};
`;

const ClassCountMessage = styled.div`
  display: flex;

  ${({ theme }) => theme.fonts.body01};
  color: ${({ theme }) => theme.colors.grey900};
`;

const EntireCountMessage = styled.p`
  ${({ theme }) => theme.fonts.body01};
  color: ${({ theme }) => theme.colors.grey400};
`;

const RightArrowParentsHomeIcon = styled(RightArrowParentsHomeIc)`
  width: 2rem;
  margin-left: 8.4rem;
`;
