import React from 'react';
import styled from 'styled-components';

interface FooterProp {
    isGreen: boolean;
}
  
export default function Footer({ isGreen }: FooterProp) {

    return (
        <FooterWrapper isGreen={isGreen}>
            <FooterButton isGreen={isGreen}> 정기수업 일정 등록하기 </FooterButton>
        </FooterWrapper>
    );
}

const FooterWrapper = styled.footer<{ isGreen: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: fixed;
    bottom: 0;
    
    width: 32rem;
    height: 6.3rem;
    padding: 0.8rem;
    
    ${({ theme, isGreen }) => isGreen ? `background-color: ${theme.colors.green5};` : `background-color: ${theme.colors.grey50};`}
`

const FooterButton = styled.button<{ isGreen: boolean }>`
    display: flex;
    
    ${({ theme }) => theme.fonts.body02};
    ${({ theme, isGreen }) => isGreen ? `color: ${theme.colors.grey0};` : `color: ${theme.colors.grey200};`}
`