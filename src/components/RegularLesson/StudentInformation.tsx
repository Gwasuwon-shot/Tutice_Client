import React from 'react';
import {RegularLessonStudentIc} from '../../assets';
import { STUDENT_COLOR } from "../../core/common/studentColor";
import SubjectLabel from '../common/SubjectLabel';
import styled from 'styled-components';

export default function StudentInformation() {

    const idx = 1;                  // 임시 Idx
    const subject = "수학";         // 임시 Subject
    
    return (
        <StudentInformationWrapper >
            <IconWrapper>
                <RegularLessonStudentIcon />
                <SectionName> 학생정보 </SectionName>
            </IconWrapper>
            <StudentWrapper>
                <StudentName> 박송현 </StudentName>
                <SubjectLabel subject={subject} backgroundColor={STUDENT_COLOR[idx % 11]} color="#5B6166" />
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
    display: flex;
    align-items: center;
    
    width: 28.8rem;
    height: 5rem;
    margin-left: 1.5rem;

    border-bottom: 1px solid ${({ theme }) => theme.colors.grey50}
`

const StudentName = styled.h2`
    margin-left: 0.8rem;
    margin-right: 0.4rem;
    
    ${({ theme }) => theme.fonts.body01};
    color: ${({ theme }) => theme.colors.grey700};
`