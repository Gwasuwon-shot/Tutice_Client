import { styled } from "styled-components";
import { NextArrowManageLessonIc } from "../../assets";
import { STUDENT_COLOR } from "../../core/common/studentColor";
import useMoveToLessonDetail from "../../hooks/useMoveToLessonDetail";
import StudentColorBox from "../common/StudentColorBox";
import SubjectLabel from "../common/SubjectLabel";
import TreeProgress from "../common/TreeProgress";

interface MainLessonProps {
  idx: number;
  studentName: string;
  subject: string;
  percent: number;
  dayOfWeekList: string[];
}

export default function MainLesson(props: MainLessonProps) {
  const { idx, studentName, subject, percent, dayOfWeekList } = props;
  const { handleMoveToManageLessonDetail } = useMoveToLessonDetail();

  function checkIsLastDay(idx: number, day: string) {
    return idx + 1 === dayOfWeekList.length ? day : day + ", ";
  }

  return (
    <MainLessonBox onClick={() => handleMoveToManageLessonDetail(idx)}>
      <MainLessonWrapperContainer>
        <MainLessonWrapper>
          <StudentColorBox backgroundColor={STUDENT_COLOR[idx % 11]} />
          <StudentNameWrapper>{studentName}</StudentNameWrapper>
          <SubjectLabel subject={subject} backgroundColor={STUDENT_COLOR[idx % 11]} color="#5B6166" />
          <DaysWrapper>
            {dayOfWeekList.map((day, idx) => (
              <>{checkIsLastDay(idx, day)}</>
            ))}
          </DaysWrapper>
        </MainLessonWrapper>
        <TreeProgress progress={percent} width={23} />
      </MainLessonWrapperContainer>
      <NextArrowManageLessonIcon />
    </MainLessonBox>
  );
}

const MainLessonBox = styled.article`
  display: flex;
  align-items: center;

  padding: 1rem;
  margin-bottom: 1rem;

  border: 1px solid ${({ theme }) => theme.colors.grey70};
  border-radius: 0.8rem;
`;

const MainLessonWrapper = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 1.2rem;
`;

const StudentNameWrapper = styled.h1`
  margin: 0 0.6rem 0 1.5rem;

  color: ${({ theme }) => theme.colors.grey900};
  ${({ theme }) => theme.fonts.body01};
`;

const DaysWrapper = styled.p`
  margin-left: 1.5rem;

  color: ${({ theme }) => theme.colors.grey600};
  ${({ theme }) => theme.fonts.body05};
`;

const MainLessonWrapperContainer = styled.section`
  display: flex;
  flex-direction: column;

  width: 23rem;
`;

const NextArrowManageLessonIcon = styled(NextArrowManageLessonIc)`
  margin-left: 2rem;
`;
