import React from "react";
import { styled } from "styled-components";
import StudentColorBox from "../common/StudentColorBox";
import { STUDENT_COLOR } from "../../core/common/studentColor";
import SubjectLabel from "../common/SubjectLabel";
import NoCheckPageAttendanceButton from "../common/NoCheckPageAttendanceButton";
import { scheduleType } from "../../type/common/scheduleType";

interface LessonData {
  idx: number;
  studentName: string;
  subject: string;
}

interface NoCheckAttendanceContanierProps {
  lesson: LessonData;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedLesson: React.Dispatch<React.SetStateAction<lessonData>>;
  schedule: scheduleType;
}

export default function NoCheckAttendanceContanier(props: NoCheckAttendanceContanierProps) {
  const { setOpenModal, setSelectedLesson, lesson, schedule } = props;
  const { idx, studentName, subject } = lesson;
  const { startTime, endTime, count } = schedule;

  function handleAttendanceCheck(): void {
    setSelectedLesson(lesson);
    setOpenModal(true);
  }
  return (
    <>
      <ContentContainer>
        <StudentColorBox backgroundColor={STUDENT_COLOR[idx % 11]} />
        <InforContainer>
          <TimeWrapper>
            <Time>
              {startTime} ~ {endTime}
            </Time>
            <Bar> | </Bar>
            <Time>{count}회차</Time>
          </TimeWrapper>
          <NameSubjectWrapper>
            <Name> {studentName}</Name>
            <Subject>
              <SubjectLabel subject={subject} color="#757A80" backgroundColor={STUDENT_COLOR[idx % 11]}></SubjectLabel>
            </Subject>
          </NameSubjectWrapper>
        </InforContainer>
        <ButtonWrapper onClick={() => handleAttendanceCheck()}>
          <NoCheckPageAttendanceButton />
        </ButtonWrapper>
      </ContentContainer>
    </>
  );
}

const ContentContainer = styled.div`
  display: flex;
  gap: 1.4rem;
`;

const InforContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  margin-right: 6rem;
`;
const Bar = styled.p`
  color: ${({ theme }) => theme.colors.grey100};
`;

const Time = styled.h2`
  ${({ theme }) => theme.fonts.body06};
  color: ${({ theme }) => theme.colors.grey500};
`;

const TimeWrapper = styled.div`
  display: flex;

  height: 1.3rem;

  gap: 0.5rem;
`;

const Name = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.fonts.body01};
  color: ${({ theme }) => theme.colors.grey900};
`;

const Subject = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.fonts.caption01};
  color: ${({ theme }) => theme.colors.grey500};
`;

const NameSubjectWrapper = styled.div`
  display: flex;

  height: 1.6rem;
  gap: 0.4rem;
`;

const ButtonWrapper = styled.div``;
