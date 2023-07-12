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
        <SubContext>
          <p> 나무 코드 생성을 통해 학생을 추가하고 </p>
          <p>링크를 학부모님에게 공유해보세요</p>
        </SubContext>
        {/* 성경이가 만들 공통 컴포넌트 연결하기 */}
        <Button type="button">나무코드 생성하기</Button>
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
  margin-top: 1.5rem;

  color: ${({ theme }) => theme.colors.green5};
  ${({ theme }) => theme.fonts.title02};
`;

const SubContext = styled.div`
  margin: 0.8rem 0 6.2rem;

  color: ${({ theme }) => theme.colors.grey700};

  text-align: center;
  ${({ theme }) => theme.fonts.body07};
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 29.2rem;
  height: 5rem;
  padding: 0.8rem;

  background-color: ${({ theme }) => theme.colors.green5};
  color: ${({ theme }) => theme.colors.white};
  gap: 0.8rem;
  flex-shrink: 0;

  border-radius: 8px;
`;
