import { studentNameSelector, subjectNameSelector } from "../../atom/common/datePicker";

import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import {useRecoilValue} from 'recoil';

export default function Footer() {
    
    const studentName = useRecoilValue(studentNameSelector);
    const subjectName = useRecoilValue(subjectNameSelector);

    const isNameValid = studentName.length >= 3; 
    const isWarning = !isNameValid && studentName.length > 0
    const isFooterGreen = subjectName !== "" && !isWarning;
    const navigate = useNavigate();

    function moveToRegularLesson() {
        navigate("/regular-lesson");
    }
    
    return (
        <FooterWrapper isFooterGreen={isFooterGreen} onClick={moveToRegularLesson}>
            <FooterButton isFooterGreen={isFooterGreen}> 정기수업 일정 등록하기 </FooterButton>
        </FooterWrapper>
    );
}

const FooterWrapper = styled.footer<{ isFooterGreen: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: fixed;
    bottom: 0;
    
    width: 32rem;
    height: 6.3rem;
    padding: 0.8rem;
    
    ${({ theme, isFooterGreen }) => isFooterGreen ? `background-color: ${theme.colors.green5};` : `background-color: ${theme.colors.grey50};`}
`

const FooterButton = styled.button<{ isFooterGreen: boolean }>`
    display: flex;
    
    ${({ theme }) => theme.fonts.body02};
    ${({ theme, isFooterGreen }) => isFooterGreen ? `color: ${theme.colors.grey0};` : `color: ${theme.colors.grey200};`}
`