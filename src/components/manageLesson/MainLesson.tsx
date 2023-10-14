import { styled } from "styled-components";
import { NextArrowManageLessonIc } from "../../assets";
import { STUDENT_COLOR } from "../../core/common/studentColor";
import useMoveToLessonDetail from "../../hooks/useMoveToLessonDetail";
import SubjectLabel from "../common/SubjectLabel";
import ManageStudentColorBox from "./ManageStudentColorBox";

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
          <ManageStudentColorBox backgroundColor={STUDENT_COLOR[idx % 10]} />
          <StudentNameWrapper>{studentName}</StudentNameWrapper>
          <SubjectLabel subject={subject} backgroundColor={STUDENT_COLOR[idx % 10]} color="#5B6166" />
        </MainLessonWrapper>
        <DaysWrapper>
          <LessonInformation>진행예정</LessonInformation>
          {dayOfWeekList.map((day, idx) => (
            <>{checkIsLastDay(idx, day)}</>
          ))}
        </DaysWrapper>
      </MainLessonWrapperContainer>
    </MainLessonBox>
  );
}

const MainLessonBox = styled.article`
  display: flex;
  align-items: center;

  padding: 1rem;

  border: 1px solid ${({ theme }) => theme.colors.grey70};
  border-radius: 0.8rem;

  width: 14rem;
  height: 14.4rem;
`;

const MainLessonWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 11.6rem;
  height: 1.6rem;
  margin-bottom: 2.1rem;
  gap: 0.7rem;
`;

const StudentNameWrapper = styled.h1`
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

const LessonInformation = styled.h2`
  ${({ theme }) => theme.fonts.body04};
  color: ${({ theme }) => theme.colors.grey500};
`;
