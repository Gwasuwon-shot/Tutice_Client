import { styled } from "styled-components";
import { NoClassLogoTeacherHomeIc } from "../../assets";
import { NO_REGISTERED_CLASS_BANNER } from "../../core/teacherHome/teacherHome";
import WelcomeTeacher from "./WelcomeTeacher";

export default function NoClassHome() {
  const { teacherName, isTodaySchedule, todaySchedule } = NO_REGISTERED_CLASS_BANNER.data;

  return (
    <>
      <WelcomeTeacher teacherName={teacherName} isTodaySchedule={isTodaySchedule} todaySchedule={todaySchedule} />
      <NoClassHomeWrapper>
        <NoClassLogoTeacherHomeIcon />
        <NoClassNotice> 아직 등록된 수업이 없어요!</NoClassNotice>
        <p> 나무 코드 생성을 통해 학생을 추가하고 </p>
        <p>링크를 학부모님에게 공유해보세요</p>
        {/* 성경이가 만들 공통 컴포넌트 연결하기 */}
        <button>나무코드 생성하기</button>
      </NoClassHomeWrapper>
    </>
  );
}

const NoClassHomeWrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const NoClassLogoTeacherHomeIcon = styled(NoClassLogoTeacherHomeIc)`
  margin-top: 4rem;
`;

const NoClassNotice = styled.h1`
  color: ${({ theme }) => theme.colors.green5};
  ${({ theme }) => theme.fonts.title02};
`;
