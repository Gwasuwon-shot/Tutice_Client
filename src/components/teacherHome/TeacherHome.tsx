import { useState } from "react";
import { styled } from "styled-components";
import Header from "../common/Header";
import TeacherFooter from "../common/TeacherFooter";
import AlarmBanner from "./AlarmBanner";
import UpcomingClassBoard from "./UpcomingClassBoard";
import WelcomeNUpPreviewBanner from "./WelcomeNUpPreviewBanner";

export default function TeacherHome() {
  // 수업이 존재는 하는지에 대한 데이터 패칭
  const [isClassExist, setIsClassExist] = useState(true);

  return (
    <TeacherHomeWrapper>
      <Header />
      {/* 수업이 존재할 때 */}
      {isClassExist ? (
        <>
          <WelcomeNUpPreviewBanner />
          <AlarmBanner />
          <UpcomingClassBoard />
        </>
      ) : (
        <></>
      )}
      <TeacherFooter />
    </TeacherHomeWrapper>
  );
}

const TeacherHomeWrapper = styled.div`
  margin: 0 1.4rem;
`;
