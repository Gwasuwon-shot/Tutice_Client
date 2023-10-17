import {
    cycleNumberState,
    dateState,
    dayState,
    firstLessonDay,
    focusDayState,
    temporarySchedule,
} from "../../atom/timePicker/timePicker";
import { studentNameState, subjectNameState } from "../../atom/common/datePicker";

import ProgressBar from "../common/ProgressBar";
import React from 'react';
import {RegisterLessonHeaderIc} from '../../assets';
import { TuticeWithTextCommonIc } from "../../assets";
import styled from 'styled-components';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

export default function Header() {


    const [firstLesson, setfirstLesson] = useRecoilState(firstLessonDay);

    const [focusDay, setFocusDay] = useRecoilState(focusDayState);
    const [day, setDayState] = useRecoilState(dayState);
    const navigate = useNavigate();
    
    useEffect(() => {
        if (firstLesson) {
            setDayState([{ dayOfWeek: firstLesson, startTime: "12:00", endTime: "12:00" }]);
        }
    }, [firstLesson]);
    
    function handleMoveToBack() {
        if (firstLesson) {
            setDayState([{ dayOfWeek: firstLesson, startTime: "12:00", endTime: "12:00" }]);
        }
        setFocusDay("");
        navigate(-1);
    }

    return (

        <HeaderWrapper>
            <RegisterLessonHeaderIc onClick={handleMoveToBack} />
            <ProgressBar progress = {66.4} />
            <InputHeader> 정기적인 수업 일정을 <br/> 알려주세요! </InputHeader> 
            <InputNotice> 첫 수업일을 기준으로 수업 일정을 <br/> 캘린더에 표시해 드릴게요 </InputNotice>    
        </HeaderWrapper>

    );
}

const HeaderWrapper = styled.header`
    display: flex;
    flex-direction: column;
    
    height: 15.8rem;
    margin-top: 2rem;
`

const InputHeader = styled.h1`
    display: flex;
    
    margin-top: 2.2rem;
    margin-left: 1.6rem;
    
    ${({ theme }) => theme.fonts.title01};
    color: ${({ theme }) => theme.colors.grey900};
`

const InputNotice = styled.h2`
    display: flex;
    
    margin-top: 1.1rem;
    margin-left: 1.6rem;
    
    ${({ theme }) => theme.fonts.body05};
    color: ${({ theme }) => theme.colors.grey600};
`

