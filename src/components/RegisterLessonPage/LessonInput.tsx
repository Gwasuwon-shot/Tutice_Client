import styled from 'styled-components';
import { useEffect, useState } from "react";
import React, { ChangeEvent, FocusEvent } from 'react';

interface NameInputSectionProp {
    nameFocused : boolean;
};

interface SubjectInputSectionProp {
    subjectFocused : boolean;
};

export default function LessonInput() {

    const [isNameInputFocused, setNameInputFocused] = useState(false);
    const [isSubjectInputFocused, setSubjectInputFocused] = useState(false);

    const [studentName, setStudentName] = useState('');
  
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
        </NameInputSection>

        <SubjectInputSection subjectFocused={isSubjectInputFocused}>
            <InputName> 과목 </InputName>
            <SubjectInput type = 'text' 
                placeholder = '수업과목을 입력하세요' 
                onFocus = {handleSubjectInputFocus}
                onBlur={handleSubjectInputBlur}
            />
        </SubjectInputSection>

    </InputWrapper>
    );
}

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 2rem;

    margin-top: 3.3rem;
`

const NameInputSection = styled.section<NameInputSectionProp>`
    display: flex;
    flex-direction: column;
    
    width: 29.2rem;
    height: 5.6rem;
    
    border-bottom: 1px solid
    ${({ theme, nameFocused }) => (nameFocused ? theme.colors.green5 : theme.colors.grey70)};
`

const SubjectInputSection = styled.section<SubjectInputSectionProp>`
    display: flex;
    flex-direction: column;
    
    width: 29.2rem;
    height: 5.6rem;
    
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
    color: ${({ theme }) => theme.colors.grey400};
`

const SubjectInput = styled.input`
    display: flex;

    margin-bottom: 1rem;
    
    ${({ theme }) => theme.fonts.title03};
    color: ${({ theme }) => theme.colors.grey400};
`