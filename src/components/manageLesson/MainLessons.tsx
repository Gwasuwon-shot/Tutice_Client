import styled from "styled-components";

export default function MainLessons() {
  return (
    <MainLessonsWrapper>
      <MainLessonsHeader>수업관리</MainLessonsHeader>
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
