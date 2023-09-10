import { useRecoilState } from "recoil";
import { userRoleData } from "../atom/loginUser/loginUser";
import ParentsHome from "../components/parentsHome/ParentsHome";
import TeacherHome from "../components/teacherHome/TeacherHome";

export default function Home() {
  const [userRole, setUserRole] = useRecoilState(userRoleData);

  function checkIsTeacher() {
    return userRole === "선생님";
  }

  return <>{checkIsTeacher() ? <TeacherHome /> : <ParentsHome />}</>;
}
