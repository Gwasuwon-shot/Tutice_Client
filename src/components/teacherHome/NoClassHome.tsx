import { styled } from "styled-components";
import { NoClassLogoTeacherHomeIc } from "../../assets";
import WelcomeTeacher from "./WelcomeTeacher";

export default function NoClassHome() {
  return (
    <>
      <WelcomeTeacher />
      <NoClassHomeWrapper>
        <NoClassLogoTeacherHomeIcon />
        <NoClassNotice> 아직 등록된 수업이 없어요!</NoClassNotice>
        <SubContext>
          <p> 나무 코드 생성을 통해 학생을 추가하고 </p>
          <p>링크를 학부모님에게 공유해보세요</p>
        </SubContext>
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
