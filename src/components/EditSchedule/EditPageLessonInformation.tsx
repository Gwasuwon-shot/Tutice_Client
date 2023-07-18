import { RegularLessonNotebookIc, RegularLessonPencilIc } from "../../assets";
import { cycleNumberState, dateState } from "../../atom/timePicker/timePicker";
import { openDatePickerState, openTimePickerState } from "../../atom/timePicker/timePicker";

import React from "react";
import { STUDENT_COLOR } from "../../core/common/studentColor";
import TimePicker from "../RegularLesson/TimePicker/TimePicker";
import styled from "styled-components";
import { useRecoilState } from "recoil";

export default function LessonInformation() {
  // 회차 표시 로직
  const [isTimePickerOpen, setIsTimePickerOpen] = useRecoilState<boolean>(openTimePickerState);

  function handleTimePicker() {
    setIsTimePickerOpen(true);
  }

  const [activeCycleSlide, setActiveCycleSlide] = useRecoilState(cycleNumberState);

  let selectedCycleText;
  if (activeCycleSlide === -1) {
    selectedCycleText = "회차를 선택하세요";
  } else {
    selectedCycleText = activeCycleSlide;
  }

  // 수업일 표시 로직

  const [isDatePickerOpen, setIsDatePickerOpen] = useRecoilState<boolean>(openDatePickerState);

  function handleDatePicker() {
    setIsDatePickerOpen(true);
  }
  const [activeDateSlide, setActiveDateSlide] = useRecoilState(dateState);

  return (
    <LessonInformationWrapper>
      <IconWrapper>
        <RegularLessonNotebookIcon />
        <SectionName> 수업정보 </SectionName>
      </IconWrapper>
      <LessonWrapper>
        <Turn></Turn>
        <LessonDate>
          <LessonDateName> 수업일 </LessonDateName>
          <LessonDateEditButton type="button" onClick={handleDatePicker}>
            {activeDateSlide.year}년 {activeDateSlide.month}월 {activeDateSlide.date}일 요일
          </LessonDateEditButton>
          <RegularLessonPencilIcon />
        </LessonDate>
      </LessonWrapper>
    </LessonInformationWrapper>
  );
}

const LessonInformationWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const IconWrapper = styled.div`
  display: flex;

  height: 3.1rem;
`;

const RegularLessonNotebookIcon = styled(RegularLessonNotebookIc)`
  margin-top: 1.5rem;
  margin-left: 1.7rem;
`;

const SectionName = styled.h1`
  margin-left: 0.8rem;
  margin-top: 1.5rem;

  ${({ theme }) => theme.fonts.body04};
  color: ${({ theme }) => theme.colors.grey600};
`;

const LessonWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  width: 28.8rem;
  height: 9.7rem;
  padding-left: 0.8rem;
  margin-left: 1.5rem;
  gap: 1.9rem;

  border-bottom: 1px solid ${({ theme }) => theme.colors.grey50};
`;

const Turn = styled.div`
  display: flex;
`;

const TurnName = styled.h2`
  display: flex;
  align-items: center;

  width: 7rem;

  ${({ theme }) => theme.fonts.body04};
  color: ${({ theme }) => theme.colors.grey400};
`;

const TurnButton = styled.button`
  ${({ theme }) => theme.fonts.body04};
  color: ${({ theme }) => theme.colors.grey100};

  padding: 0;
`;

const LessonDate = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 28.8rem;
  height: 3.6rem;

  background-color: ${({ theme }) => theme.colors.grey50};
  border-radius: 0.6rem;
`;
const LessonDateName = styled.h2`
  display: flex;
  align-items: center;

  width: 7rem;

  ${({ theme }) => theme.fonts.body04};
  color: ${({ theme }) => theme.colors.grey400};
`;
const LessonDateEditButton = styled.button`
  padding: 0;

  ${({ theme }) => theme.fonts.body02};
  color: ${({ theme }) => theme.colors.grey700};
`;

const RegularLessonPencilIcon = styled(RegularLessonPencilIc)`
  width: 1.6rem;
  height: 1.6rem;
`;
