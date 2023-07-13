import React from 'react';
import {RegularLessonStudentIc} from '../../assets';
import styled from 'styled-components';

export default function StudentInformation() {

    return (
        <StudentInformationWrapper >
            <IconWrapper>
                <RegularLessonStudentIcon />
                <SectionName> 학생정보 </SectionName>
            </IconWrapper>
            <StudentWrapper>
                
            </StudentWrapper>
        </StudentInformationWrapper>

    );
}

const StudentInformationWrapper = styled.section`
    display: flex;
    flex-direction: column;
`

const IconWrapper = styled.div`
    display: flex;
    
    height: 2.8rem;
`

const  RegularLessonStudentIcon = styled(RegularLessonStudentIc)`
    margin-left: 1.7rem;
    margin-top: 1.2rem;
`

const SectionName = styled.h1`
    margin-left: 0.8rem;
    margin-top: 1.1rem;
    
    ${({ theme }) => theme.fonts.body04};
    color: ${({ theme }) => theme.colors.grey600};
`

const StudentWrapper = styled.div`

`