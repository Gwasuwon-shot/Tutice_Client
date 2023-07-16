import React, { useEffect } from 'react';
import {RegularLessonCalenderIc, RegularLessonClockIc} from '../../assets';
import { ampmSlide, hourSlide, minuteSlide } from "../../atom/timePicker/timePicker";
import {dayState, focusDayState, openFinishDetailState, openStartDetailState} from "../../atom/timePicker/timePicker";

import DetailTimePicker from './TimePicker/DetailTimePicker';
import RoundBottomButton from '../common/RoundBottomButton';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';

interface DayProp {
    isSelected: boolean;
};

export default function LessonDate() {
    
    // 1. 요일 관리

    const DAYS = ['월', '화', '수', '목', '금', '토', '일'];
    const messages = "수업일시 추가";
    
    const [selectedDays, setSelectedDays] = useRecoilState(dayState);
    const [focusDay, setFocusDay] = useRecoilState(focusDayState);
    
    function handleDayButton(day: string) {
        
        let dayIndex;
        if (selectedDays.length >= 1) {
            dayIndex = selectedDays.findIndex((selectedDay) => selectedDay.dayOfWeek === day);
        } else {
            dayIndex = -1;
        }
        
        if (dayIndex !== -1) {
            setSelectedDays((prevSelectedDays) =>
                prevSelectedDays.filter((selectedDay) => selectedDay.dayOfWeek !== day)
            );
        } else {
            // 만약 시작, 종료시간을 선택하지 않은 요일이 있다면 선택하도록 강제
            const isTimeNotSelected = focusDay.length >= 1;
            
            if (isTimeNotSelected) {
                return; 
            }
            
            setFocusDay((prevSelectedDays) => [
            ...prevSelectedDays,
            { dayOfWeek: day, startTime: '', endTime: '' },
          ]);
        }
    }

      
    // check 용
    useEffect(() => {
        console.log(selectedDays);
        console.log(focusDay)
    }, [selectedDays, focusDay]);
    
    
    // 2. 요일 시작, 종료시간 관리

    const [isStartPickerOpen, setIsStartPickerOpen] = useRecoilState<boolean>(openStartDetailState);

    function handlStartTimePicker () {
        setIsStartPickerOpen(true);
    }
    
    const [isFinishPickerOpen, setIsFinishPickerOpen] = useRecoilState<boolean>(openFinishDetailState);

    function handleFinishTimePicker () {
        setIsFinishPickerOpen(true);
    }


    // 표시 위해 ampm, minute, hour slide 가져오기
    
    const AMPM = ['오전', '오후'];
    const [activeAmPmSlide, setActiveAmPmSlide] = useRecoilState(ampmSlide);
    const [activeHourSlide, setActiveHourSlide] = useRecoilState(hourSlide);
    const [activeMinuteSlide, setActiveMinuteSlide] = useRecoilState(minuteSlide);
    

    // 수업일시 추가하기 

    function AddLesson() {
        // 현재 focusDay의 값을 selectedDays에 추가
        setSelectedDays((prevSelectedDays) => [...prevSelectedDays, focusDay]);
        // 현재 focusDay의 값을 빈 값으로 초기화
        setFocusDay({
            dayOfWeek: ['일', '월', '화', '수', '목', '금', '토'][new Date().getDay()],
            startTime: '',
            endTime: '',
        });
    }
    
    return (
        <LessonDateWrapper>

            <IconWrapper>
                <RegularLessonClockIcon />
                <SectionName> 수업일시 </SectionName>
                <Explain> 수업종료 5분 뒤에 출결알람을 드릴게요. </Explain>
            </IconWrapper>

            <DayWrapper>
                {DAYS.map((day, index) => (
                <Day key={index} 
                onClick= {()=> handleDayButton(day)} 
                isSelected={(selectedDays.length >= 1 && selectedDays.findIndex((selectedDay) => selectedDay.dayOfWeek === day) !== -1) || (focusDay.dayOfWeek === day)}>{day}</Day>
                ))}
            </DayWrapper>

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

            <ButtonWrapper onClick = {AddLesson}>
                <RoundBottomButton buttonMessage = {messages} />
            </ButtonWrapper>

            <ModalWrapper>
                <RegularLessonCalenderIcon />
                <ModalButton> 캘린더로 일정 확인하기 </ModalButton>
            </ModalWrapper>
                    
        </LessonDateWrapper>
    );
}

const LessonDateWrapper = styled.section`
`

const IconWrapper = styled.div`
    display: flex;
    
    height: 3.1rem;
`

const RegularLessonClockIcon = styled(RegularLessonClockIc)`
    margin-left: 1.7rem;
    margin-top: 1.5rem;
`

const SectionName = styled.h1`
    margin-left: 0.8rem;
    margin-top: 1.5rem;
    
    ${({ theme }) => theme.fonts.body04};
    color: ${({ theme }) => theme.colors.grey600};
`

const Explain = styled.h3`
    margin-top: 1.7rem;
    margin-left: 1.8rem;

    ${({ theme }) => theme.fonts.caption01};
    color: ${({ theme }) => theme.colors.grey300};  
`

const DayWrapper = styled.section`
    display: flex;
    justify-content: center;
    gap: 0.2rem;

    padding-top: 1.2rem;
`

const Day = styled.button<DayProp>`
    width: 3.8rem;
    height: 3.8rem;
    border-radius: 50%;

    ${({ theme }) => theme.fonts.body02};
    color: ${({ theme }) => theme.colors.grey300};  
    background-color: ${({ theme }) => theme.colors.grey50}; 
    ${({ isSelected, theme }) => isSelected && `background-color: ${theme.colors.green4}`};
    ${({ isSelected, theme }) => isSelected && `color: ${theme.colors.white}`};
`

const TimeWrapper = styled.section`
    display: flex;
    justify-content: space-between;

    margin-top: 1.6rem;
    padding-left: 2rem;
    padding-right: 2rem;
`

const TimeChoose = styled.h3`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 2.8rem;

    ${({ theme }) => theme.fonts.body04};
    color: ${({ theme }) => theme.colors.grey400};  
`

const TimeButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    ${({ theme }) => theme.fonts.body04};
    color: ${({ theme }) => theme.colors.grey100};  
`

const ButtonWrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;

    margin : 1.6rem 0.8rem 0 0.8rem;
    padding-bottom: 0.6rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey50};
`

const ModalWrapper = styled.section`
    display: flex;
    padding-top: 0.8rem;
`

const RegularLessonCalenderIcon = styled(RegularLessonCalenderIc)`
    margin-left: 1.3rem;
`

const ModalButton = styled.button`
    margin-left: 0.3rem;

    text-decoration: underline;
    ${({ theme }) => theme.fonts.body04};
    color: ${({ theme }) => theme.colors.grey400};  
`