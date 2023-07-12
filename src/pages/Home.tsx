import TeacherHome from "../components/teacherHome/TeacherHome";

export default function Home() {
  return (
    <>
      {/* 선생님인 경우 */}
      <TeacherHome />
      {/* 학부모인 경우 ParentHome 컴포넌트 띄워주기 */}
    </>
  );
}
