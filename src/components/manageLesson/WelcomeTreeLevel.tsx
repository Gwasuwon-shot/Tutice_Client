import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import useGetLessonScheduleByTeacher from "../../hooks/useGetLessonScheduleByTeacher";

export default function WelcomeTreeLevel() {
  const { manageLessonId } = useParams();
  const { lesson, scheduleList } = useGetLessonScheduleByTeacher(Number(manageLessonId));
  // const { lesson, scheduleList } = lessonScheduleByTeacher;
  const { idx, studentName, subject, count, nowCount } = lesson;

  function checkIsLastLesson() {
    return count === nowCount;
  }

  return (
    <WelcomeTitle>
      {checkIsLastLesson() ? (
        <>
          수고했어요 <br /> 열매가 열렸어요!
        </>
      ) : (
        <>
          열매가 열리기 까지 <br /> {count - nowCount}회차 남았습니다
        </>
      )}
    </WelcomeTitle>
  );
}

const WelcomeTitle = styled.h1`
  margin-top: 1.6rem;
  ${({ theme }) => theme.fonts.title02}
`;
