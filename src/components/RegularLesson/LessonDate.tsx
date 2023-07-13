import React from 'react';
import {RegularLessonClockIc} from '../../assets';
import styled from 'styled-components';

export default function LessonDate() {

    return (
        <LessonDateWrapper>
            <IconWrapper>
                <RegularLessonClockIcon />
                <SectionName> 수업일시 </SectionName>
                <Explain> 수업종료 5분 뒤에 출결알람을 드릴게요. </Explain>
            </IconWrapper>
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
