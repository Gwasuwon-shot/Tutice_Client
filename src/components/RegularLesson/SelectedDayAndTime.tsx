import React from 'react';
import {RegularLessonGroupIc} from "../../assets";
import styled from 'styled-components';
import {useRecoilValue} from 'recoil';

interface selectedProps {
    dayofweek : string;
    startTime : string;
    endTime : string;
}

export default function SelectedDayAndTime(props : selectedProps) {
    // dayofweek = {'월'} startTime = {'1시'} endTime = {'2시'} 

    const { dayofweek, startTime, endTime } = props;

    return (
        <SelectedWrapper>
            <RegularLessonGroupIcon />
            <DayWrapper> {dayofweek} </DayWrapper>
            <TimeWrapper> {startTime} - {endTime} </TimeWrapper>
        </SelectedWrapper>
    );
}

const SelectedWrapper = styled.article`
    display: flex;
    align-items: center;

    width: 29.2rem;
    height: 3.6rem;
    padding: 1rem;
    margin: 1.5rem;

    border-radius: 7px;
    background-color: ${({ theme }) => theme.colors.green1}; 
    color: ${({ theme }) => theme.colors.green5}; 
`

const RegularLessonGroupIcon = styled(RegularLessonGroupIc)`
    width: 1.8rem;
    height: 1.8rem;
`

const DayWrapper = styled.div`
    display: flex;
    width: 12rem;
    margin-left: 1.8rem;
    ${({ theme }) => theme.fonts.body03}; 
    color: ${({ theme }) => theme.colors.green5}; 
`

const TimeWrapper = styled.div`
    display: flex;
    justfiy-content: flex-end;
    width: 12rem;
    ${({ theme }) => theme.fonts.body04}; 
    color: ${({ theme }) => theme.colors.green5}; 
`