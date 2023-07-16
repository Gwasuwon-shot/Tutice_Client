import React from "react";
import { styled } from "styled-components";
import PastLessonRecord from "./PastLessonRecord";

export default function PastLessonRecordList() {
  const SCHEDULE_LIST = [
    {
      idx: 45,
      date: "2023-12-20",
      status: "출석",
      startTime: "13:22",
      endTime: "15:22",
    },
    {
      idx: 46,
      date: "2023-11-20",
      status: "결석",
      startTime: "13:22",
      endTime: "15:22",
    },
    {
      idx: 47,
      date: "2023-10-20",
      status: "취소",
      startTime: "13:22",
      endTime: "15:22",
    },
    {
      idx: 48,
      date: "2023-09-20",
      status: "상태없음",
      startTime: "13:22",
      endTime: "15:22",
    },
  ];

  return (
    <PastLessonRecordListWrapper>
      {SCHEDULE_LIST.map(({ idx, date, startTime, endTime }) => {
        return <PastLessonRecord key={idx} date={date} startTime={startTime} endTime={endTime} />;
      })}
    </PastLessonRecordListWrapper>
  );
}

const PastLessonRecordListWrapper = styled.section`
  width: 29.2rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin: 2.5rem auto;
`;
