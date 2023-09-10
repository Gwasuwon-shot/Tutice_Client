import { RegularLessonCalenderIc, RegularLessonClockIc } from "../../assets";
import { studentNameState, subjectNameState } from "../../atom/common/datePicker";
import {
  cycleNumberState,
  dateState,
  dayState,
  focusDayState,
  openFinishDetailState,
  openStartDetailState,
  temporarySchedule,
} from "../../atom/timePicker/timePicker";

import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { getTemporarySchedule } from "../../api/getTemporarySchedule";
import RoundBottomButton from "../common/RoundBottomButton";
import SelectedDayAndTime from "./SelectedDayAndTime";

interface DayProp {
  isSelected: boolean;
}

interface Day {
  dayOfWeek: string;
  startTime: string;
  endTime: string;
}

interface temporaryProp {
  studentName: string;
  subject: string;
  count: number;
  startDate: string;
  regularScheduleList: Day[];
}

export default function LessonDate() {
  const navigate = useNavigate();

  // 1. 요일 관리

  const DAYS = ["월", "화", "수", "목", "금", "토", "일"];

  const [selectedDays, setSelectedDays] = useRecoilState(dayState);

  function handleDayButton(day: string) {
    setSelectedDays((prevSelectedDays) => {
      const existingDayIndex = prevSelectedDays.findIndex((selectedDay) => selectedDay.dayOfWeek === day);
  
      if (existingDayIndex !== -1) {
        const newSelectedDays = [...prevSelectedDays];
        newSelectedDays.splice(existingDayIndex, 1);
        return newSelectedDays;
      } else {
        return [...prevSelectedDays, { dayOfWeek: day, startTime: "24:00", endTime: "24:00" }];
      }
    });
  }
  
  // post 로직 추가

  const [studentName, setStudentName] = useRecoilState(studentNameState);
  const [subject, setSubject] = useRecoilState(subjectNameState);
  const [count, setCount] = useRecoilState(cycleNumberState);
  const [scheduleDate, setscheduleDate] = useRecoilState(dateState);
  const startDate = `${scheduleDate.year}-${String(scheduleDate.month).padStart(2, "0")}-${String(
    scheduleDate.date,
  ).padStart(2, "0")}`;
  const [tempSchedule, setTempSchedule] = useRecoilState(temporarySchedule);

  const postInformation: temporaryProp = {
    studentName: studentName,
    subject: subject,
    count: count,
    startDate: startDate,
    regularScheduleList: selectedDays,
  };

  const { mutate: getNewTemporarySchedule } = useMutation(getTemporarySchedule, {
    onSuccess: (response) => {
      setTempSchedule(response);
      navigate("/register-calendar");
    },

    onError: (error) => console.debug(error),
  });

  function postTemporary(info: temporaryProp) {
    getNewTemporarySchedule(postInformation);
  }

  return (
    <LessonDateWrapper>
      <IconWrapper>
        <RegularLessonClockIcon />
        <SectionName> 수업일시 </SectionName>
        <Explain> 수업 종료시 출결 입력 알림을 보내드릴게요. </Explain>
      </IconWrapper>

      <ModalWrapper>
        <RegularLessonCalenderIcon />
        <ModalButton onClick={() => postTemporary(postInformation)}> 캘린더로 기존 일정 확인하기 </ModalButton>
      </ModalWrapper>

      <DayWrapper>
        {DAYS.map((day, index) => (
          <Day
            key={index}
            onClick={() => handleDayButton(day)}
            isSelected={selectedDays.some(selectedDay => selectedDay.dayOfWeek === day)}>
            {day}
          </Day>
        ))}
      </DayWrapper>

      {selectedDays.map((day, index) => (
        <SelectedDayAndTime key={index} dayofweek={day.dayOfWeek} startTime={day.startTime} endTime={day.endTime} />
      ))}
      
    </LessonDateWrapper>
  );
}

const LessonDateWrapper = styled.section``;

const IconWrapper = styled.div`
  display: flex;

  height: 3.1rem;
`;

const RegularLessonClockIcon = styled(RegularLessonClockIc)`
  margin-left: 1.7rem;
  margin-top: 1.5rem;
`;

const SectionName = styled.h1`
  margin-left: 0.8rem;
  margin-top: 1.5rem;

  ${({ theme }) => theme.fonts.body04};
  color: ${({ theme }) => theme.colors.grey600};
`;

const Explain = styled.h3`
  margin-top: 1.7rem;
  margin-left: 4.8rem;

  ${({ theme }) => theme.fonts.caption01};
  color: ${({ theme }) => theme.colors.grey300};
`;

const DayWrapper = styled.section`
  display: flex;
  justify-content: center;
  gap: 0.2rem;

  padding-top: 0.6rem;
  margin-bottom: 2rem;
`;

const Day = styled.button<DayProp>`
  width: 3.8rem;
  height: 3.8rem;
  border-radius: 50%;

  ${({ theme }) => theme.fonts.body02};
  color: ${({ theme }) => theme.colors.grey300};
  background-color: ${({ theme }) => theme.colors.grey50};
  ${({ isSelected, theme }) => isSelected && `background-color: ${theme.colors.green4}`};
  ${({ isSelected, theme }) => isSelected && `color: ${theme.colors.white}`};
`;

const TimeWrapper = styled.section`
  display: flex;
  justify-content: space-between;

  margin-top: 1.6rem;
  padding-left: 2rem;
  padding-right: 2rem;
`;

const TimeChoose = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 2.3rem;

  ${({ theme }) => theme.fonts.body04};
  color: ${({ theme }) => theme.colors.grey400};
`;

const TimeButton = styled.button<{ selected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  ${({ theme }) => theme.fonts.body04};
  color: ${({ theme }) => theme.colors.grey100};
  ${({ selected, theme }) => selected && `color: ${theme.colors.grey700};`}
`;

const ButtonWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 1.6rem 0.8rem 0 0.8rem;
  padding-bottom: 0.6rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey50};
`;

const ModalWrapper = styled.section`
  display: flex;
  margin-top: 0.8rem;
  margin-bottom: 1rem;
`;

const RegularLessonCalenderIcon = styled(RegularLessonCalenderIc)`
  margin-left: 1.7rem;
`;

const ModalButton = styled.button`
  margin-left: 0.3rem;

  text-decoration: underline;
  ${({ theme }) => theme.fonts.body05};
  color: ${({ theme }) => theme.colors.grey400};
`;
