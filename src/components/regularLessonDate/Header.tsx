import {dateState, firstLessonDay} from '../../atom/timePicker/timePicker';
import { studentNameState, subjectNameState } from "../../atom/common/datePicker";

import ProgressBar from "../common/ProgressBar";
import React from 'react';
import { RegisterLessonHeaderIc } from '../../assets';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

export default function Header() {
    
    const navigate = useNavigate();

    const [firstLesson, setFirstLesson] = useRecoilState(firstLessonDay);
    const [date, setDateState] = useRecoilState(dateState);
    
    function handleMoveToBack() {
        setFirstLesson({ 1: "월", 2: "화", 3: "수", 4: "목", 5: "금", 6: "토", 0: "일" }[new Date().getDay()])
        setDateState({ year: new Date().getFullYear(), month: new Date().getMonth() + 1, date: new Date().getDate() })
        navigate(-1);
    }

    return (

        <HeaderWrapper>
            <RegisterLessonHeaderIc onClick={handleMoveToBack} />
            <ProgressBar progress = {75} />
            <InputHeader> 첫 수업을 시작한 날짜를 <br/> 알려주세요! </InputHeader> 
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

