import { useState } from "react";
import { useRecoilState } from "recoil";
import { styled } from "styled-components";
import { isSnackBarOpen } from "../../atom/common/isSnackBarOpen";
import Header from "../common/Header";
import SuccessSendingAlarmSnackBar from "../common/SuccessSendingAlarmSnackBar";
import TeacherFooter from "../common/TeacherFooter";
import NoClassHome from "./NoClassHome";
import YesClassHome from "./YesClassHome";

export default function TeacherHome() {
  // 수업이 존재는 하는지에 대한 데이터 패칭
  const [isClassExist, setIsClassExist] = useState(true);
  const [snackBarOpen, setSanckBarOpen] = useRecoilState(isSnackBarOpen);

  return (
    <>
      {snackBarOpen && <SuccessSendingAlarmSnackBar />}
      <TeacherHomeWrapper>
        <Header />
        {isClassExist ? <YesClassHome /> : <NoClassHome />}
      </TeacherHomeWrapper>
      <TeacherFooter />
    </>
  );
}

const TeacherHomeWrapper = styled.div`
  margin: 0 1.4rem;
`;
