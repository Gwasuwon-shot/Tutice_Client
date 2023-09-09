import {
    cycleNumberState,
    dateState,
    dayState,
    firstLessonDay,
    focusDayState,
    temporarySchedule,
} from "../../atom/timePicker/timePicker";

import {RegisterLessonHeaderIc} from '../../assets';
import { TuticeWithTextCommonIc } from "../../assets";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

export default function Header() {

    const navigate = useNavigate();
    const [count, setCount] = useRecoilState(cycleNumberState);
    const [firstLesson, setFirstLesson] = useRecoilState(firstLessonDay);
    const [focusDay, setFocusDay] = useRecoilState(focusDayState);
    const [day, setDayState] = useRecoilState(dayState);
    const [date, setDateState] = useRecoilState(dateState);
    
    function handleMoveToBack() {
        setCount(-1)
        setFirstLesson({ 1: "월", 2: "화", 3: "수", 4: "목", 5: "금", 6: "토", 0: "일" }[new Date().getDay()])
        setFocusDay("")
        setDayState([])
        setDateState({ year: new Date().getFullYear(), month: new Date().getMonth() + 1, date: new Date().getDate() })
        navigate(-1);
    }
  
    return (

        <HeaderWrapper>
            <RegisterLessonHeaderIcon onClick={handleMoveToBack} />
            <HeaderName> 정기수업 일정 등록 </HeaderName>
        </HeaderWrapper>

    );
}

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    
    position: relative;
    
    height: 5rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey50}
`

const HeaderName = styled.h1`
    display: flex;
    
    ${({ theme }) => theme.fonts.body01};
    color: ${({ theme }) => theme.colors.grey900};
`
const RegisterLessonHeaderIcon = styled(RegisterLessonHeaderIc)`
    position: absolute;
    top: 0.8rem;
    left: 0rem;
    width: 4rem;
    height: 4rem;
`;