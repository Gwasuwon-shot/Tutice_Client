import React from 'react';
import {RegularLessonClockIc} from '../../assets';
import styled from 'styled-components';

export default function LessonDate() {
    const days = ['월', '화', '수', '목', '금', '토', '일'];
    return (
        <LessonDateWrapper>
            <IconWrapper>
                <RegularLessonClockIcon />
                <SectionName> 수업일시 </SectionName>
                <Explain> 수업종료 5분 뒤에 출결알람을 드릴게요. </Explain>
            </IconWrapper>
            <DayWrapper>
                {days.map((day, index) => (
                <Day key={index}>{day}</Day>
                ))}
            </DayWrapper>
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

const Day = styled.button`
    width: 3.8rem;
    height: 3.8rem;
    border-radius: 50%;
    ${({ theme }) => theme.fonts.body02};
    color: ${({ theme }) => theme.colors.grey300};  
    background-color: ${({ theme }) => theme.colors.grey50}; 
`