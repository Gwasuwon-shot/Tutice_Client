import styled from 'styled-components';
import React from 'react';
export default function Footer() {

    return (
        <FooterWrapper>
            <FooterButton> 정기수업 일정 등록하기 </FooterButton>
        </FooterWrapper>
    );
}

const FooterWrapper = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: fixed;
    bottom: 0;
    
    width: 32rem;
    height: 6.3rem;
    padding: 0.8rem;
    
    background-color: ${({ theme }) => theme.colors.grey50};
`

const FooterButton = styled.button`
    display: flex;
    
    ${({ theme }) => theme.fonts.body02};
    color: ${({ theme }) => theme.colors.grey200};
`