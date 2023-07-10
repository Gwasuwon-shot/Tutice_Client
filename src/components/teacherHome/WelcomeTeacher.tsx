interface WelcomeTeacherProp {
  teacherName: string;
}

export default function WelcomeTeacher(props: WelcomeTeacherProp) {
  const { teacherName } = props;

  return (
    <>
      <>{teacherName} 선생님</>
      <>수고하셨어요!</>
    </>
  );
}
