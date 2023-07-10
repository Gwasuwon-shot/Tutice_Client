import { styled } from "styled-components";

interface WelcomeTeacherProp {
  teacherName: string;
}

export default function WelcomeTeacher(props: WelcomeTeacherProp) {
  const { teacherName } = props;

  return (
    <WelcomeTeacherWrapper>
      <WelcomeText>{teacherName} 선생님</WelcomeText>
      <WelcomeText>수고하셨어요!</WelcomeText>
    </WelcomeTeacherWrapper>
  );
}

const WelcomeText = styled.h1`
  ${({ theme }) => theme.fonts.title01};
`;

const WelcomeTeacherWrapper = styled.header`
  margin: 2rem 0 1.2rem 0.4rem;
`;
