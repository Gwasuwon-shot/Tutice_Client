import React from "react";
import Header from "../components/EditSchedule/Header";
import EditPageStudentInformation from "../components/EditSchedule/EditPageStudentInformation";
import EidtPageLessonInformation from "../components/EditSchedule/EditPageLessonInformation";
import EditPageTime from "../components/EditSchedule/EditPageTime";
import EditPageFooter from "../components/EditSchedule/EditPageFooter";

//캘린더에서 수정을 눌렀을 때 나오는 페이지
export default function EditShcedule() {
  return (
    <>
      <Header />
      <EditPageStudentInformation />
      <EidtPageLessonInformation />
      <EditPageTime />
      <EditPageFooter />
    </>
  );
}

