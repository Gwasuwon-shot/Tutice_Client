interface WelcomeTeacherProp {
  teacherName: string;
}

export default function WelcomeTeacher(props: WelcomeTeacherProp) {
  const { teacherName } = props;

  return <div>WelcomeTeacher</div>;
}
