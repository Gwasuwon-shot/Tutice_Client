import styled from "styled-components";
import TeacherFooter from "../components/common/TeacherFooter";
import MainLessons from "../components/manageLesson/MainLessons";
import ExtensionQuestion from "../components/manageLesson/ExtensionQuestion";

export default function ManageLessonMain() {
  return (
    <>
      <MainLessonsWrapper>
        <MainLessonsHeader>수업관리</MainLessonsHeader>
        <ExtensionQuestion />
        <MainLessons />
      </MainLessonsWrapper>
      <TeacherFooter />
    </>
  );
}

const MainLessonsWrapper = styled.section`
  padding: 0 1.4rem;
`;

const MainLessonsHeader = styled.header`
  margin: 4rem 0 1.6rem;

  color: ${({ theme }) => theme.colors.grey900};

  ${({ theme }) => theme.fonts.title01};
`;
