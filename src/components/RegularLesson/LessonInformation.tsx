import {RegularLessonNotebookIc, RegularLessonPencilIc} from '../../assets';
import { openDatePickerState, openTimePickerState } from "../../atom/timePicker/timePicker";

import React from 'react';
import { STUDENT_COLOR } from "../../core/common/studentColor";
import TimePicker from './TimePicker/TimePicker';
import {cycleNumberState} from '../../atom/timePicker/timePicker';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';

export default function LessonInformation() {

    // 회차 표시 로직
    const [isTimePickerOpen, setIsTimePickerOpen] = useRecoilState<boolean>(openTimePickerState);
    
    function handleTimePicker () {
        setIsTimePickerOpen(true);
    }

    const [activeSlide, setActiveSlide] = useRecoilState(cycleNumberState);
    
    let selectedCycleText;
    if (activeSlide === -1) {
        selectedCycleText = "회차를 선택하세요";
    } else {
        selectedCycleText = activeSlide;
    }
    

    // 수업일 표시 로직

    const [isDatePickerOpen, setIsDatePickerOpen] = useRecoilState<boolean>(openDatePickerState);
    
    function handleDatePicker () {
        setIsDatePickerOpen(true);
    }
    
    return (
        <LessonInformationWrapper>
            <IconWrapper>
                <RegularLessonNotebookIcon />
                <SectionName> 수업정보 </SectionName>
            </IconWrapper>
            <LessonWrapper>
                <Turn> 
                    <TurnName> 회차 </TurnName>
                    <TurnButton type = "button" onClick={handleTimePicker}> {selectedCycleText} </TurnButton>
                </Turn>
                <StartDate>
                    <StartDateName> 첫 수업일 </StartDateName>
                    <StartDateButton type = "button" onClick={handleDatePicker}> 2023년 7월 3일 </StartDateButton>
                    <RegularLessonPencilIcon />
                </StartDate>
            </LessonWrapper>
        </LessonInformationWrapper>
        
    );
}

const LessonInformationWrapper = styled.section`
    display: flex;
    flex-direction: column;
`

const IconWrapper = styled.div`
    display: flex;
    
    height: 3.1rem;
`

const RegularLessonNotebookIcon = styled(RegularLessonNotebookIc)`
    margin-left: 1.7rem;
    margin-top: 1.5rem;
`

const SectionName = styled.h1`
    margin-left: 0.8rem;
    margin-top: 1.5rem;
    
    ${({ theme }) => theme.fonts.body04};
    color: ${({ theme }) => theme.colors.grey600};
`

const LessonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.9rem;
    
    width: 28.8rem;
    height: 9.7rem;
    margin-left: 1.5rem;
    padding-left: 0.8rem;
    
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey50}
`

const Turn = styled.div`
    display: flex;
`

const TurnName = styled.h2`
    display: flex;
    align-items: center;
    
    width: 7rem;
    
    ${({ theme }) => theme.fonts.body04};
    color: ${({ theme }) => theme.colors.grey400};
`

const TurnButton = styled.button`
    ${({ theme }) => theme.fonts.body04};
    color: ${({ theme }) => theme.colors.grey100};
    padding: 0;
`

const StartDate = styled.div`
    display: flex;
`
const StartDateName = styled.h2`
    display: flex;
    align-items: center;
    
    width: 7rem;

    ${({ theme }) => theme.fonts.body04};
    color: ${({ theme }) => theme.colors.grey400};
`
const StartDateButton = styled.button`
    padding: 0;

    ${({ theme }) => theme.fonts.body02};
    color: ${({ theme }) => theme.colors.grey700};
`

const RegularLessonPencilIcon = styled(RegularLessonPencilIc)`
    margin-left: 1.6rem;
`
