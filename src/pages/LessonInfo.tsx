import { styled } from "styled-components";
import CommonBackButton from "../components/common/CommonBackButton";
import LessonInfoList from "../components/lessonRecord/LessonInfoList";

export default function LessonInfo() {
  return (
    <>
      <CommonBackButton />
      <LessonInfoHeader>수업 정보</LessonInfoHeader>
      <LessonInfoList />
    </>
  );
}

const LessonInfoHeader = styled.header`
  margin: 1.4rem;

  ${({ theme }) => theme.fonts.title01};
  color: ${({ theme }) => theme.colors.grey900};
`;
