import {useRecoilState, useRecoilValue} from 'recoil';

import React from 'react';
import {RegularLessonGroupIc} from "../../assets";
import {dayState} from '../../atom/timePicker/timePicker';
import styled from 'styled-components';

interface selectedProps {
    dayofweek : string;
    startTime : string;
    endTime : string;
}

export default function SelectedDayAndTime(props : selectedProps) {

    const { dayofweek, startTime, endTime } = props;
    const [selectedDays, setSelectedDays] = useRecoilState(dayState);

    // 블록 삭제
    // function handleDeleteDay() {
    //     const newList = selectedDays.filter(param => param.dayOfWeek !== dayofweek)
    //     setSelectedDays(newList);
    // };

    return (
        <SelectedWrapper>
            <DayWrapper> {dayofweek}요일 </DayWrapper>
            <TimeWrapper> 
                <Time>
                    <TimeInfo> 시작 </TimeInfo>
                    <DetailTime>
                        {Number(startTime.slice(0, 2)) <= 12 ? (
                        <> 오전 {Number(startTime.slice(0, 2))}시 {startTime.slice(3)}분 </>
                        ) : (
                        <> 오후 {Number(startTime.slice(0, 2)) - 12}시 {startTime.slice(3)}분 </>
                        )}
                    </DetailTime>
                </Time>
                <Time>
                    <TimeInfo> 종료 </TimeInfo>
                    <DetailTime>
                        {Number(endTime.slice(0, 2)) <= 12 ? (
                        <> 오전 {Number(endTime.slice(0, 2))}시 {endTime.slice(3)}분 </>
                        ) : (
                        <> 오후 {Number(endTime.slice(0, 2)) - 12}시 {endTime.slice(3)}분 </>
                        )}
                    </DetailTime>
                </Time>
            </TimeWrapper>            
        </SelectedWrapper>
    );
}

const SelectedWrapper = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.8rem;
    width: 29.2rem;
    height: 8rem;
    padding: 0.9rem;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    margin-bottom: 0.4rem;

    border-radius: 7px;
    background-color: ${({ theme }) => theme.colors.green1}; 
    color: ${({ theme }) => theme.colors.green5}; 
`

const DayWrapper = styled.div`
    display: flex;
    width: 5rem;
    ${({ theme }) => theme.fonts.body03}; 
    color: ${({ theme }) => theme.colors.green5}; 
`

const TimeWrapper = styled.div`
    display: flex;
    gap: 1rem;
    width: 28rem;
`

const Time = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.7rem;
    width: 13rem;
    height: 3.4rem;
    background-color: ${({ theme }) => theme.colors.green2}; 
    border-radius: 7px;
`

const TimeInfo = styled.p`
    ${({ theme }) => theme.fonts.body04}; 
    color: ${({ theme }) => theme.colors.grey0}; 
`

const DetailTime = styled.p`
    ${({ theme }) => theme.fonts.body04}; 
    color: ${({ theme }) => theme.colors.green5}; 
`

