import React from "react";
import LessonInfoList from "../components/lessonRecord/LessonInfoList";
import { styled } from "styled-components";
import BackButton from "../components/common/BackButton";
import ParentsFooter from "../components/common/ParentsFooter";

export default function LessonInfo() {
  return (
    <>
      <BackButton />
      <LessonInfoHeader>수업 정보</LessonInfoHeader>
      <LessonInfoList />
      <ParentsFooter />
    </>
  );
}

const LessonInfoHeader = styled.header`
  margin: 1.4rem;

  ${({ theme }) => theme.fonts.title01};
  color: ${({ theme }) => theme.colors.grey900};
`;
