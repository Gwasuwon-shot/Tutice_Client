import React from "react";
import { styled } from "styled-components";
import LessonInfoItemLayout from "./LessonInfoItemLayout";
import { BANK_INFO, CLASS_INFO } from "../../core/Parents/lessonInfo";
import useGetLessonDetailByParents from "../../hooks/useGetLessonDetailByParents";
import { useParams } from "react-router-dom";
import { getLessonDetailByParents } from "../../api/getLessonDetailByParents";

export default function LessonInfoList() {
  //커스텀 훅에서 account 객체 값 배열로 만들어서 리턴

  const { lessonId } = useParams();
  const { teacherName, accountInfo, etcInfo } = useGetLessonDetailByParents(Number(lessonId));

  return (
    <>
      <LessonInfoMainCategory>선생님</LessonInfoMainCategory>
      <LessonInfoItemLayout detailCategory="이름" content={teacherName} />

      <LessonInfoMainCategory>은행</LessonInfoMainCategory>
      {accountInfo?.map((info, idx) => {
        return (
          <LessonInfoItemLayout isBankAccount={idx === 2} key={idx} detailCategory={BANK_INFO[idx]} content={info} />
        );
      })}
      <LessonInfoMainCategory>수업진행</LessonInfoMainCategory>
      {etcInfo?.map((classInfo, idx) => {
        return <LessonInfoItemLayout key={idx} detailCategory={CLASS_INFO[idx]} content={classInfo} />;
      })}
    </>
  );
}

const LessonInfoMainCategory = styled.div`
  width: 100%;
  height: 2.6rem;
  padding: 0.5rem 1.4rem;

  ${({ theme }) => theme.fonts.body04};
  color: ${({ theme }) => theme.colors.grey500};

  background-color: ${({ theme }) => theme.colors.grey20};
`;
