import React from 'react';
import {RegularLessonGroupIc} from "../../assets";
import styled from 'styled-components';
import {useRecoilValue} from 'recoil';

export default function SelectedDayAndTime() {


    return (
        <SelectedWrapper>
            <RegularLessonGroupIcon />
        </SelectedWrapper>
    );
}

const SelectedWrapper = styled.article`
    display: flex;
    align-items: center;

    width: 29.2rem;
    height: 3.6rem;
    padding: 1rem;
    margin: 1.4rem;

    border-radius: 7px;
    background-color: ${({ theme }) => theme.colors.green1}; 
    color: ${({ theme }) => theme.colors.green5}; 
`

const RegularLessonGroupIcon = styled(RegularLessonGroupIc)`
    width: 1.8rem;
    height: 1.8rem;
`

const DayWrapepr = styled.div`
    display: flex;
    width: 13rem;
    ${({ theme }) => theme.font.body03}; 
    color: ${({ theme }) => theme.colors.green5}; 
`
const TimeWrapper = styled.div`
    display: flex;
    width: 12rem;
    ${({ theme }) => theme.font.body04}; 
    color: ${({ theme }) => theme.colors.green5}; 
`