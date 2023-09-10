import styled from "styled-components";
import TeacherFooter from "../components/common/TeacherFooter";
import Account from "../components/mypage/Account";
import Header from "../components/mypage/Header";
import Terms from "../components/mypage/Terms";

export default function Mypage() {
  return (
    <>
      <MyPageWrapper>
        <Header />
        <Terms />
        <Account />
      </MyPageWrapper>
      <TeacherFooter />
    </>
  );
}

const MyPageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
`;
