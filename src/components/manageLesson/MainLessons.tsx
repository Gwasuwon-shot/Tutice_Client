import { styled } from "styled-components";
import useGetAllLessons from "../../hooks/useGetAllLessons";
import { lessonListType } from "../../type/manageLesson/lessonListType";
import MainLesson from "./MainLesson";

export default function MainLessons() {
  const { lessonList } = useGetAllLessons();

  return (
    <>
      <MainLessonsWrapper>
        {lessonList &&
          lessonList?.map(({ idx, studentName, subject, percent, dayOfWeekList }: lessonListType) => (
            <MainLesson
              key={idx}
              idx={idx}
              studentName={studentName}
              subject={subject}
              percent={percent}
              dayOfWeekList={dayOfWeekList}
            />
          ))}
      </MainLessonsWrapper>
    </>
  );
}

// const TitleWrapper = styled

const MainLessonsWrapper = styled.article`
  display: flex;
  flex-wrap: wrap;
  gap: 1.1rem;
`;
