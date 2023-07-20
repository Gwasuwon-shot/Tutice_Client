import React from "react";
import { styled } from "styled-components";
import LessonInfoItemLayout from "./LessonInfoItemLayout";
import { BANK_INFO, CLASS_INFO } from "../../core/Parents/lessonInfo";
import useGetLessonDetailByParents from "../../hooks/useGetLessonDetailByParents";
import { useParams } from "react-router-dom";

export default function LessonInfoList() {
  const lesson = {
    idx: 4,
    teacherName: "이은수",
    account: {
      name: "이은수",
      bank: "농협은행",
      number: "302-1097-9103-21",
    },
    startDate: "2023-07-09",
    payment: "선불",
    amount: 300000,
  };

  //커스텀 훅에서 account 객체 값 배열로 만들어서 리턴
  const { account, startDate, payment, amount } = lesson;
  const accountInfoArray = [account.name, account.bank, account.number];
  const formattedAmount = amount / 10000 + "만원";
  const classInfoArrray = [startDate, payment, formattedAmount];
  const { lessonId } = useParams();
  const { parentsLesson } = useGetLessonDetailByParents(Number(lessonId));

  return (
    <>
      <LessonInfoMainCategory>선생님</LessonInfoMainCategory>
      <LessonInfoItemLayout detailCategory="이름" content="이은수" />

      <LessonInfoMainCategory>은행</LessonInfoMainCategory>
      {BANK_INFO.map((info, idx) => {
        return (
          <LessonInfoItemLayout
            isBankAccount={idx === 2}
            key={idx}
            detailCategory={info}
            content={accountInfoArray[idx]}
          />
        );
      })}

      <LessonInfoMainCategory>수업진행</LessonInfoMainCategory>
      {CLASS_INFO.map((classInfo, idx) => {
        return <LessonInfoItemLayout key={idx} detailCategory={classInfo} content={classInfoArrray[idx]} />;
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
