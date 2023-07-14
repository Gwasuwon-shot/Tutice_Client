import { styled } from "styled-components";
import useGetAllLessons from "../../hooks/useGetAllLessons";
import MainLesson from "./MainLesson";

export default function MainLessons() {
  const { lessonList } = useGetAllLessons();

  return (
    <>
      <Title>나의 수업</Title>
      {lessonList.map(({ idx, studentName, subject, percent, dayOfWeekList }) => (
        <MainLesson
          key={idx}
          idx={idx}
          studentName={studentName}
          subject={subject}
          percent={percent}
          dayOfWeekList={dayOfWeekList}
        />
      ))}
    </>
  );
}

const Title = styled.h1`
  margin-bottom: 1.2rem;

  color: ${({ theme }) => theme.colors.grey900};
  ${({ theme }) => theme.fonts.title02};
`;
