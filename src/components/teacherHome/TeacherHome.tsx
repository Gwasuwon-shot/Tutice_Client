import { useState } from "react";
import { styled } from "styled-components";
import Header from "../common/Header";
import TeacherFooter from "../common/TeacherFooter";
import AlarmNUpcomingClass from "./AlarmNUpcomingClass";
import NoClassHome from "./NoClassHome";
import WelcomeNUpPreviewBanner from "./WelcomeNUpPreviewBanner";

export default function TeacherHome() {
  // 수업이 존재는 하는지에 대한 데이터 패칭
  const [isClassExist, setIsClassExist] = useState(false);

  return (
    <>
      <TeacherHomeWrapper>
        <Header />
        {isClassExist ? (
          <>
            <WelcomeNUpPreviewBanner />
            <AlarmNUpcomingClass />
          </>
        ) : (
          <NoClassHome />
        )}
      </TeacherHomeWrapper>
      <TeacherFooter />
    </>
  );
}

const TeacherHomeWrapper = styled.div`
  margin: 0 1.4rem;
`;
