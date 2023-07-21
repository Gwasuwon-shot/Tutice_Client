import React from "react";
import { styled } from "styled-components";
import PastLessonRecord from "./PastLessonRecord";
import { useParams } from "react-router-dom";
import useGetPastLessonRecord from "../../hooks/useGetPastLessonRecord";
import { PastLessonRecordType } from "../../type/lessonRecord/lessonRecord";

export default function PastLessonRecordList() {
  const { lessonId } = useParams();
  const { scheduleList } = useGetPastLessonRecord(Number(lessonId));

  return (
    <PastLessonRecordListWrapper>
      {scheduleList?.map(({ idx, date, startTime, endTime }: PastLessonRecordType) => {
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
