import React from 'react';
import { RegisterLessonHeaderIc } from '../../assets';
import styled from 'styled-components';

import { useNavigate } from "react-router-dom";
export default function Header() {
    const navigate = useNavigate();

    function handleMoveToBack() {
      navigate(-1);
    }

    return (
    
        <HeaderWrapper>
            <RegisterLessonHeaderIc  onClick={handleMoveToBack} />
            <PaymentHeader> 수업비 입금에 대한 <br /> 정보를 입력해주세요 </PaymentHeader> 
        </HeaderWrapper>

    );
}

const HeaderWrapper = styled.header`
    display: flex;
    flex-direction: column;
    
    height: 15.8rem;
    margin-top: 2rem;
`

const PaymentHeader = styled.h1`
    display: flex;
    
    margin-top: 2.2rem;
    margin-left: 1.6rem;
    
    ${({ theme }) => theme.fonts.title01};
    color: ${({ theme }) => theme.colors.grey900};
`
