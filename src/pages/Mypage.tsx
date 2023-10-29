import { useRecoilState } from "recoil";
import styled from "styled-components";
import { userRoleData } from "../atom/loginUser/loginUser";
import { ParentsFooter } from "../components/common";
import TeacherFooter from "../components/common/TeacherFooter";
import Account from "../components/mypage/Account";
import Alarm from "../components/mypage/Alarm";
import Feedback from "../components/mypage/Feedback";
import Header from "../components/mypage/Header";
import Terms from "../components/mypage/Terms";

export default function Mypage() {
  const [userRole, setUserRole] = useRecoilState(userRoleData);

  function checkIsTeacher() {
    return userRole === "선생님";
  }

  return (
    <>
      <MyPageWrapper>
        <Header />
        <Alarm />
        <Terms />
        <Feedback />
        <Account />
      </MyPageWrapper>
      {checkIsTeacher() ? <TeacherFooter /> : <ParentsFooter />}
    </>
  );
}

const MyPageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
`;
