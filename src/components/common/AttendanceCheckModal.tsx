import React from "react";
import ToastModal from "./ToastModal";
import SubjectLabel from "./SubjectLabel";

export default function AttendanceCheckModal() {
  return (
    <ToastModal>
      <button>취소</button>
      <header>출결 체크</header>
      <h1>박송현 학생</h1>
      <SubjectLabel subject="수학" backgroundColor="red" color="blue" />
      <p>3회차 수업 출결 체크를 진행해 주세요</p>
    </ToastModal>
  );
}
