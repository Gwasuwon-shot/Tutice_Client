import styled from "styled-components";
import { AbsentAttendanceModalIc, AttendaceAttendanceModalIc, CancelAttendanceModalIc } from "../../assets";
import SubjectLabel from "./SubjectLabel";
import ToastModal from "./ToastModal";

export default function AttendanceCheckModal() {
  return (
    <ToastModal>
      <button>취소</button>
      <header>출결 체크</header>
      <h1>박송현 학생</h1>
      <SubjectLabel subject="수학" backgroundColor="red" color="blue" />
      <p>3회차 수업 출결 체크를 진행해 주세요</p>
      <AbsentAttendanceModalIcon />
      <AttendaceAttendanceModalIcon />
      <CancelAttendanceModalIcon />
    </ToastModal>
  );
}

const AbsentAttendanceModalIcon = styled(AbsentAttendanceModalIc)`
  width: 7.8rem;
`;

const AttendaceAttendanceModalIcon = styled(AttendaceAttendanceModalIc)`
  width: 6.9rem;
`;

const CancelAttendanceModalIcon = styled(CancelAttendanceModalIc)`
  width: 6.9rem;
`;
