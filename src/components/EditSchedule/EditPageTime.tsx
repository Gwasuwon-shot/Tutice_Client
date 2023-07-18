import { useEffect, useState } from "react";
import { RegularLessonClockIc } from "../../assets";
import { dayState, focusDayState, openFinishDetailState, openStartDetailState } from "../../atom/timePicker/timePicker";

import { useRecoilState } from "recoil";
import styled from "styled-components";
import BottomButton from "../common/BottomButton";

export default function EditPageTime() {
  const [selectedDays, setSelectedDays] = useRecoilState(dayState);
  const [focusDay, setFocusDay] = useRecoilState(focusDayState);
  const [isActive, setIsActive] = useState(false);

  function handleDayButton(day: string) {
    let dayIndex;
    if (selectedDays.length >= 1) {
      dayIndex = selectedDays.findIndex((selectedDay) => selectedDay.dayOfWeek === day);
    } else {
      dayIndex = -1;
    }

    if (dayIndex !== -1) {
      setSelectedDays((prevSelectedDays) => prevSelectedDays.filter((selectedDay) => selectedDay.dayOfWeek !== day));
    } else {
      // 만약 시작, 종료시간을 선택하지 않은 요일이 있다면 선택하도록 강제
      const isTimeNotSelected = focusDay.dayOfWeek !== "" && (focusDay.startTime === "" || focusDay.endTime === "");

      if (isTimeNotSelected) {
        return;
      }

      setFocusDay({ dayOfWeek: day, startTime: "", endTime: "" });
    }
  }

  // check 용
  useEffect(() => {
    console.log(selectedDays);
    console.log(focusDay);
  }, [selectedDays, focusDay]);

  // 2. 요일 시작, 종료시간 관리

  const [isStartPickerOpen, setIsStartPickerOpen] = useRecoilState<boolean>(openStartDetailState);

  function handlStartTimePicker() {
    setIsStartPickerOpen(true);
  }

  const [isFinishPickerOpen, setIsFinishPickerOpen] = useRecoilState<boolean>(openFinishDetailState);

  function handleFinishTimePicker() {
    setIsFinishPickerOpen(true);
  }

  // 수업일시 추가하기

  function handleEditLesson() {
    // 현재 focusDay의 값을 selectedDays에 추가
    setSelectedDays((prevSelectedDays) => [...prevSelectedDays, focusDay]);
    // 현재 focusDay의 값을 빈 값으로 초기화
    setFocusDay({
      dayOfWeek: "",
      startTime: "",
      endTime: "",
    });
  }

  return (
    <LessonDateWrapper>
      <IconWrapper>
        <RegularLessonClockIcon />
        <SectionName> 수업시간 </SectionName>
        <Explain> 수업종료 5분 뒤에 출결알람을 드릴게요. </Explain>
      </IconWrapper>

      <TimeWrapper>
        <TimeChoose> 시작 </TimeChoose>
        {focusDay.startTime === "" ? (
          <TimeButton onClick={handlStartTimePicker}>시간을 선택하세요</TimeButton>
        ) : (
          <TimeButton onClick={handlStartTimePicker}>
            {Number(focusDay.startTime.slice(0, 2)) <= 12 ? (
              <>
                오전 {Number(focusDay.startTime.slice(0, 2))} {focusDay.startTime.slice(2)}
              </>
            ) : (
              <>
                오후 {Number(focusDay.startTime.slice(0, 2)) - 12} {focusDay.startTime.slice(2)}
              </>
            )}
          </TimeButton>
        )}
        <TimeChoose> 종료 </TimeChoose>
        {focusDay.endTime === "" ? (
          <TimeButton onClick={handleFinishTimePicker}>시간을 선택하세요</TimeButton>
        ) : (
          <TimeButton onClick={handleFinishTimePicker}>
            {Number(focusDay.endTime.slice(0, 2)) <= 12 ? (
              <>
                오전 {Number(focusDay.endTime.slice(0, 2))} {focusDay.endTime.slice(2)}
              </>
            ) : (
              <>
                오후 {Number(focusDay.endTime.slice(0, 2)) - 12} {focusDay.endTime.slice(2)}
              </>
            )}
          </TimeButton>
        )}
      </TimeWrapper>

      <ButtonWrapper>
        <BottomButton type="button" disabled={true} isActive={isActive} onClick={handleEditLesson}>
          저장
        </BottomButton>
      </ButtonWrapper>
    </LessonDateWrapper>
  );
}

const LessonDateWrapper = styled.section``;

const IconWrapper = styled.div`
  display: flex;

  height: 3.1rem;
`;

const RegularLessonClockIcon = styled(RegularLessonClockIc)`
  margin-top: 1.5rem;
  margin-left: 1.7rem;
`;

const SectionName = styled.h1`
  margin-left: 0.8rem;
  margin-top: 1.5rem;

  ${({ theme }) => theme.fonts.body04};
  color: ${({ theme }) => theme.colors.grey600};
`;

const Explain = styled.h3`
  margin-top: 1.7rem;
  margin-left: 1.8rem;

  ${({ theme }) => theme.fonts.caption01};
  color: ${({ theme }) => theme.colors.grey300};
`;

const TimeWrapper = styled.section`
  display: flex;
  justify-content: space-between;

  padding-right: 2rem;
  padding-left: 2rem;
  margin-top: 1.6rem;
`;

const TimeChoose = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 2.8rem;

  ${({ theme }) => theme.fonts.body04};
  color: ${({ theme }) => theme.colors.grey400};
`;

const TimeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.fonts.body04};
  color: ${({ theme }) => theme.colors.grey100};
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;

  margin-left: 1.6rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey50};
`;
