import { styled } from "styled-components";
import Header from "../common/Header";
import TeacherFooter from "../common/TeacherFooter";
import Banner from "./Banner";

export default function TeacherHome() {
  return (
    <TeacherHomeWrapper>
      <Header />
      <Banner />
      <TeacherFooter />
    </TeacherHomeWrapper>
  );
}

const TeacherHomeWrapper = styled.div`
  margin: 0 1.4rem;
`;
