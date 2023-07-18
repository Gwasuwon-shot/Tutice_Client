import { accountNumber, bankName, moneyAmount, payingPersonName } from "../../atom/tuitionPayment/tuitionPayment";

import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import {useRecoilState} from 'recoil';

export default function Footer() {
    const [personName, setPersonName] = useRecoilState<string>(payingPersonName); 
    const [accountNum, setAccountNum] = useRecoilState<string>(accountNumber);
    const [bank, setBank] = useRecoilState<string>(bankName);
    const [money, setMoney] = useRecoilState<string>(moneyAmount);

    const isFooterGreen = personName !== "" && accountNum !== "" && bank !== "" && money !== "";

    
    return (
        <FooterWrapper isFooterGreen={isFooterGreen}>
            <FooterButton isFooterGreen={isFooterGreen}> 다음 </FooterButton>
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