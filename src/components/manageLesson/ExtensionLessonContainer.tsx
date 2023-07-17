import React from "react";
import { styled } from "styled-components";
import { NextMonthArrowButton } from "../../assets";
import { STUDENT_COLOR } from "../../core/common/studentColor";
import StudentColorBox from "../common/StudentColorBox";
import SubjectLabel from "../common/SubjectLabel";

interface ExtensionLessonContainerProps {
  lesson: {
    idx: number;
    studentName: string;
    subject: string;
    count: number;
  };
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedLesson: React.Dispatch<React.SetStateAction<undefined>>;
  endScheduleDate: string;
}

export default function ExtensionLessonContainer(props: ExtensionLessonContainerProps) {
  const { lesson, endScheduleDate, setSelectedLesson, setOpenModal } = props;
  const { idx, studentName, subject, count } = lesson;

  function handleClickExtension() {
    setSelectedLesson(lesson);
    setOpenModal(true);
  }
  return (
    <>
      <ContentWrapper key={idx}>
        <StudentColorBox backgroundColor={STUDENT_COLOR[idx % 11]} />
        <DateandCount>
          {endScheduleDate.slice(5, 6) == "0" ? (
            <p>
              {endScheduleDate.slice(6, 7)} . {endScheduleDate.slice(8, 10)}
            </p>
          ) : (
            <p>
              {endScheduleDate.slice(5, 7)} .{endScheduleDate.slice(8, 10)}
            </p>
          )}
          <p>{count} 회차 종료 </p>
        </DateandCount>
        <NameandSubject>
          <Name>{studentName}</Name>
          <SubjectLabel subject={subject} backgroundColor={STUDENT_COLOR[idx % 11]} color="#5B6166" />
        </NameandSubject>
        <SlideButton onClick={handleClickExtension} />
      </ContentWrapper>
    </>
  );
}

const ContentWrapper = styled.div`
  display: flex;
  gap: 1.8rem;
  flex: 0 0 auto;

  align-items: center;

  width: 29rem;
`;
const DateandCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 1.8rem;

  ${({ theme }) => theme.fonts.body05};
  color: ${({ theme }) => theme.colors.grey600};
`;

const Name = styled.h3`
  ${({ theme }) => theme.fonts.body01};
  color: ${({ theme }) => theme.colors.grey900};
`;

const NameandSubject = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
`;

const SlideButton = styled(NextMonthArrowButton)`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`;
