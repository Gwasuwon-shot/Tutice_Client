import { styled } from "styled-components";
import { NextArrowManageLessonIc } from "../../assets";
import { STUDENT_COLOR } from "../../core/common/studentColor";
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

  return (
    <MainLessonBox>
      <MainLessonWrapper>
        <StudentColorBox backgroundColor={STUDENT_COLOR[idx % 11]} />
        <h1>{studentName}</h1>
        <SubjectLabel subject={subject} backgroundColor={STUDENT_COLOR[idx % 11]} color="#5B6166" />
        {dayOfWeekList.map((day) => day)}
        <NextArrowManageLessonIc />
      </MainLessonWrapper>
      <TreeProgress progress={percent} width={23} />
    </MainLessonBox>
  );
}

const MainLessonBox = styled.article`
  display: flex;
  justify-content: center;
  flex-direction: column;

  padding: 1rem;

  border: 1px solid ${({ theme }) => theme.colors.grey70};
  border-radius: 8px;
`;

const MainLessonWrapper = styled.section`
  display: flex;
  align-items: center;
`;
