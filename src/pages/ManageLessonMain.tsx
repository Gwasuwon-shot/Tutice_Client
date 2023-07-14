import styled from "styled-components";
import MainLessons from "../components/manageLesson/MainLessons";

export default function ManageLessonMain() {
  return (
    <MainLessonsWrapper>
      <MainLessonsHeader>수업관리</MainLessonsHeader>
      <MainLessons />
    </MainLessonsWrapper>
  );
}

const MainLessonsWrapper = styled.section`
  padding: 0 1.4rem;
`;

const MainLessonsHeader = styled.header`
  margin: 4rem 0 1.6rem;

  color: ${({ theme }) => theme.fonts.grey900};

  ${({ theme }) => theme.fonts.title01};
`;
