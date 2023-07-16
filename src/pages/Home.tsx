import { useState } from "react";
import ParentsHome from "../components/parentsHome/ParentsHome";
import TeacherHome from "../components/teacherHome/TeacherHome";

export default function Home() {
  const [isTeacherHome, setIsTeacherHome] = useState(true);
  return (
    <>
      {/* 선생님인 경우 TeacherHome, 학부모인 경우 ParentHome 컴포넌트 띄워주기*/}
      {isTeacherHome ? <TeacherHome /> : <ParentsHome />}
    </>
  );
}
