import React, { ChangeEvent, FocusEvent } from 'react';
import { useEffect, useState } from "react";

import { RegisterLessonInputIc } from '../../assets';
import styled from 'styled-components';

interface NameInputSectionProp {
    nameFocused : boolean;
};

interface SubjectInputSectionProp {
    subjectFocused : boolean;
};

export default function LessonInput() {

    // 1. 학생이름 / 과목이름에 Focus 되었는지 여부 관리
    const [isNameInputFocused, setNameInputFocused] = useState(false);
    const [isSubjectInputFocused, setSubjectInputFocused] = useState(false);

    // 2. 학생이름, 과목이름 입력값 관리
    const [studentName, setStudentName] = useState('');
    const [subjectName, setSubjectName] = useState('');
    
    const handleNameInputFocus = () => {
        setNameInputFocused(true);
    };

    const handleSubjectInputFocus = () => {
        setSubjectInputFocused(true);
    };

    const handleNameInputBlur = () => {
        setNameInputFocused(false);
    };
    
    const handleSubjectInputBlur = () => {
        setSubjectInputFocused(false);
    };

    const handleNameInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setStudentName(event.target.value);
    };

    const handleSubjectInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSubjectName(event.target.value);
    };


    const isNameValid = studentName.length >= 3; 

    const isWarning = !isNameValid && studentName.length > 0

    if (studentName !== "" && subjectName !== "") {
        
    }

    return (
        
    <InputWrapper>

        <NameInputSection nameFocused={isNameInputFocused}>
            <InputName> 학생이름 </InputName> 
            <StudentInput 
                type = 'text' 
                placeholder = '이름을 입력하세요'
                value={studentName}
                onChange={handleNameInputChange}
                onFocus={handleNameInputFocus}
                onBlur={handleNameInputBlur} 
            />
            {isWarning && <WarningMessage> 이름은 최소 2자 이상 입력해주세요 </WarningMessage>}
            {isNameInputFocused && <RegisterLessonInputIcon/>}
        </NameInputSection>

        <SubjectInputSection subjectFocused={isSubjectInputFocused} isWarning = {isWarning}>
            <InputName> 과목 </InputName>
            <SubjectInput type = 'text' 
                placeholder = '수업과목을 입력하세요' 
                value={subjectName}
                onChange={handleSubjectInputChange}
                onFocus = {handleSubjectInputFocus}
                onBlur={handleSubjectInputBlur}
            />
            {isSubjectInputFocused && <RegisterLessonInputIcon/>}
        </SubjectInputSection>

    </InputWrapper>
    );
}

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-top: 2rem;
`

const NameInputSection = styled.section<NameInputSectionProp>`
    display: flex;
    flex-direction: column;

    position: relative;

    width: 29.2rem;
    height: 5.6rem;
    margin-bottom: 1.3rem;

    border-bottom: 1px solid
    ${({ theme, nameFocused }) => (nameFocused ? theme.colors.green5 : theme.colors.grey70)};
`

const SubjectInputSection = styled.section<SubjectInputSectionProp & { isWarning : boolean }>`
    display: flex;
    flex-direction: column;
    
    position: relative;

    width: 29.2rem;
    height: 5.6rem;
    margin-top: ${({ isWarning }) => (isWarning ? '1.3rem' : '0')};

    border-bottom: 1px solid
    ${({ theme, subjectFocused }) => (subjectFocused ? theme.colors.green5 : theme.colors.grey70)};
`

const InputName = styled.h1` 
    display: flex;
    
    margin-bottom: 1rem;
        
    ${({ theme }) => theme.fonts.body04};
    color: ${({ theme }) => theme.colors.grey300};
`

const StudentInput = styled.input`
    display: flex;

    margin-bottom: 1rem;
    
    ${({ theme }) => theme.fonts.title03};
    color: ${({ theme }) => theme.colors.grey700};
    &::placeholder {
        color: ${({ theme }) => theme.colors.grey400};
    }
`

const SubjectInput = styled.input`
    display: flex;
    
    margin-bottom: 1rem;
    
    ${({ theme }) => theme.fonts.title03};
    color: ${({ theme }) => theme.colors.grey700};
    &::placeholder {
        color: ${({ theme }) => theme.colors.grey400};
    }
`

const WarningMessage = styled.h3`
    ${({ theme }) => theme.fonts.body06};
    color: ${({ theme }) => theme.colors.sementic_red};
`

const RegisterLessonInputIcon = styled(RegisterLessonInputIc)`
    position: absolute;    
    bottom: 0.7rem;
    right: 1.1rem;
`