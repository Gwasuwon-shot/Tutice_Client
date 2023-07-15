import { useRecoilState } from "recoil";
import { styled } from "styled-components";
import { upcomingClassData } from "../../atom/attendanceCheck/upcomingClassData";
import { WELCOME_TEACHER_COMMENTS } from "../../core/teacherHome/welcomeTeacherComments";

export default function WelcomeTeacher() {
  const [classData, setclassData] = useRecoilState(upcomingClassData);
  const { teacherName, isTodaySchedule, todaySchedule } = classData;

  function checkTodayClassEnd() {
    return isTodaySchedule && todaySchedule === null;
  }

  return (
    <WelcomeTeacherWrapper>
      <WelcomeText>{teacherName} 선생님</WelcomeText>
      <WelcomeText>
        {checkTodayClassEnd() ? WELCOME_TEACHER_COMMENTS.goodJob : WELCOME_TEACHER_COMMENTS.hello}
      </WelcomeText>
    </WelcomeTeacherWrapper>
  );
}

const WelcomeText = styled.h1`
  ${({ theme }) => theme.fonts.title01};
`;

const WelcomeTeacherWrapper = styled.header`
  margin: 2rem 0 1.2rem 0.4rem;
`;
