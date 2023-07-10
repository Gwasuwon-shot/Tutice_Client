import { styled } from "styled-components";

interface WelcomeTeacherProp {
  teacherName: string;
}

export default function WelcomeTeacher(props: WelcomeTeacherProp) {
  const { teacherName } = props;

  return (
    <>
      <WelcomeText>{teacherName} 선생님</WelcomeText>
      <WelcomeText>수고하셨어요!</WelcomeText>
    </>
  );
}

const WelcomeText = styled.h1`
  ${({ theme }) => theme.fonts.title01}
`;
