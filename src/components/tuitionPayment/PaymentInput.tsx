import React, { ChangeEvent, FocusEvent } from 'react';
import { RegisterLessonInputIc, TuitionPaymentRadioButtonCheckedIc, TuitionPaymentRadioButtonNotCheckedIc } from '../../assets';
import { accountNumber, bankName, moneyAmount, payingPersonName, paymentOrder } from "../../atom/tuitionPayment/tuitionPayment";
import { useEffect, useState } from "react";

import styled from 'styled-components';
import { useRecoilState } from "recoil";

interface NameInputSectionProp {
    nameFocused : boolean;
};

interface AccountInputSectionProp {
    accountFocused : boolean;
};

interface BankProp {
    bankFocused : boolean;
}

interface MoneyProp {
    moneyFocused : boolean;
}

export default function PaymentInput() {

    // 1. 입금자명
    const [isNameInputFocused, setNameInputFocused] = useState(false); 
    const [personName, setPersonName] = useRecoilState<string>(payingPersonName); 
    
    function handleNameInputFocus() { 
        setNameInputFocused(true);
    };
    
    function handleNameInputBlur () { 
        setNameInputFocused(false);
    };

    function handleNameInputChange (event: ChangeEvent<HTMLInputElement>) { //
        setPersonName(event.target.value);
    };

    // 2. 계좌번호
    const [isAccountNumInputFocused, setAccountNumInputFocused] = useState(false);
    const [accountNum, setAccountNum] = useRecoilState<string>(accountNumber);
    
    function handleAccountNumInputFocus () {
        setAccountNumInputFocused(true);
    };

    function handleAccountNumInputBlur () {
        setAccountNumInputFocused(false);
    };

    function handleAccountNumInputChange (event: ChangeEvent<HTMLInputElement>) {
        setAccountNum(event.target.value);
    };

    // 3. 은행명
    const [isBankFocused, setBankFocused] = useState(false);
    const [bank, setBank] = useRecoilState<string>(bankName);
    
    function handleBankFocus () {
        setBankFocused(true);
    };

    function handleBankBlur () {
        setBankFocused(false);
    };

    function handleBankChange (event: ChangeEvent<HTMLInputElement>) {
        setBank(event.target.value);
    };


    // 4. 과외비

    const [isMoneyFocused, setMoneyFocused] = useState(false);
    const [money, setMoney] = useRecoilState<string>(moneyAmount);
    
    function handleMoneyFocus () {
        setMoneyFocused(true);
    };

    function handleMoneyBlur () {
        setMoneyFocused(false);
    };

    function handleMoneyChange (event: ChangeEvent<HTMLInputElement>) {
        setMoney(event.target.value);
    };

    // 5. checkbox
    const [order, setOrder] = useRecoilState<string>(paymentOrder); 

    const handleFirstChange = () => {
        setOrder("선불");
    };

    const handleLastChange = () => {
        setOrder("후불");
    }
    
    return (
        
    <InputWrapper>

        <NameInputSection nameFocused={isNameInputFocused}>
            <InputName> 입금자명 </InputName> 
            <NameInput
                type = 'text' 
                placeholder = '실명을 입력해주세요'
                value={personName}
                onChange={handleNameInputChange}
                onFocus={handleNameInputFocus}
                onBlur={handleNameInputBlur} 
            />
            {isNameInputFocused && <RegisterLessonInputIcon/>}
        </NameInputSection>

        <AccountInputSection accountFocused={isAccountNumInputFocused}>
            <InputName> 계좌번호 </InputName>
            <AccountInput 
                type = 'text' 
                placeholder = '계좌번호를 입력해주세요' 
                value={accountNum}
                onChange={handleAccountNumInputChange}
                onFocus = {handleAccountNumInputFocus}
                onBlur={handleAccountNumInputBlur}
            />
            {isAccountNumInputFocused && <RegisterLessonInputIcon/>}
        </AccountInputSection>

        <BankInputSection bankFocused={isBankFocused}>
            <InputName> 은행명 </InputName>
            <BankInput 
                type = 'text' 
                placeholder = '은행명을 입력해주세요' 
                value={bank}
                onChange={handleBankChange}
                onFocus = {handleBankFocus}
                onBlur={handleBankBlur}
            />
            {isBankFocused && <RegisterLessonInputIcon/>}
        </BankInputSection>
        
        <MoneyInputSection moneyFocused={isMoneyFocused}>
            <InputName> 회차당 과외비 </InputName>
            <MoneyInput 
                type = 'text' 
                placeholder = '금액을 입력해주세요' 
                value={money}
                onChange={handleMoneyChange}
                onFocus = {handleMoneyFocus}
                onBlur={handleMoneyBlur}
            />
            {isMoneyFocused && <RegisterLessonInputIcon/>}
        </MoneyInputSection>

        <CheckboxWrapper>
            <CheckboxHeader> 입금 방식</CheckboxHeader>
            <CheckboxLabel>
                <CheckboxInput type ="checkbox" checked = {order} onChange = {handleFirstChange} />
                {order === "선불" ? <CheckboxIcon as = {TuitionPaymentRadioButtonCheckedIc} /> : <CheckboxIcon as = {TuitionPaymentRadioButtonNotCheckedIc} /> }
                <CheckboxP> 선불 </CheckboxP>
            </CheckboxLabel>
            <CheckboxLabel>
                <CheckboxInput type ="checkbox" checked = {order} onChange = {handleLastChange} />
                {order === "후불" ? <CheckboxIcon as = {TuitionPaymentRadioButtonCheckedIc} /> : <CheckboxIcon as = {TuitionPaymentRadioButtonNotCheckedIc} /> }
                <CheckboxP> 후불 </CheckboxP>
            </CheckboxLabel>
        </CheckboxWrapper>
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

const AccountInputSection = styled.section<AccountInputSectionProp>`
    display: flex;
    flex-direction: column;
    
    position: relative;

    width: 29.2rem;
    height: 5.6rem;
    margin-bottom: 1.3rem;

    border-bottom: 1px solid
    ${({ theme, accountFocused }) => (accountFocused ? theme.colors.green5 : theme.colors.grey70)};
`

const InputName = styled.h1` 
    display: flex;
    
    margin-bottom: 1rem;
        
    ${({ theme }) => theme.fonts.body04};
    color: ${({ theme }) => theme.colors.grey300};
`

const NameInput = styled.input`
    display: flex;

    margin-bottom: 1rem;
    
    ${({ theme }) => theme.fonts.title03};
    color: ${({ theme }) => theme.colors.grey700};
    &::placeholder {
        color: ${({ theme }) => theme.colors.grey400};
    }
`

const AccountInput = styled.input`
    display: flex;
    
    margin-bottom: 1rem;
    
    ${({ theme }) => theme.fonts.title03};
    color: ${({ theme }) => theme.colors.grey700};
    &::placeholder {
        color: ${({ theme }) => theme.colors.grey400};
    }
`

const BankInputSection = styled.section<BankProp>`
    display: flex;
    flex-direction: column;

    position: relative;

    width: 29.2rem;
    height: 5.6rem;
    margin-bottom: 1.3rem;

    border-bottom: 1px solid
    ${({ theme, bankFocused }) => (bankFocused ? theme.colors.green5 : theme.colors.grey70)};
`

const BankInput = styled.input`
    display: flex;

    margin-bottom: 1rem;
    
    ${({ theme }) => theme.fonts.title03};
    color: ${({ theme }) => theme.colors.grey700};
    &::placeholder {
        color: ${({ theme }) => theme.colors.grey400};
    }
`

const MoneyInputSection = styled.section<MoneyProp>`
    display: flex;
    flex-direction: column;

    position: relative;

    width: 29.2rem;
    height: 5.6rem;
    margin-bottom: 1.3rem;

    border-bottom: 1px solid;
    ${({ theme, moneyFocused }) => (moneyFocused ? theme.colors.green5 : theme.colors.grey70)};
`

const MoneyInput = styled.input`
    display: flex;

    margin-bottom: 1rem;
    
    ${({ theme }) => theme.fonts.title03};
    color: ${({ theme }) => theme.colors.grey700};
    &::placeholder {
        color: ${({ theme }) => theme.colors.grey400};
    }
`

const RegisterLessonInputIcon = styled(RegisterLessonInputIc)`
    position: absolute;    
    bottom: 0.7rem;
    right: 1.1rem;
`

const CheckboxWrapper = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
    
    width: 29.2rem;
    margin-top: 1.7rem;
`

const CheckboxHeader = styled.h1`
    ${({ theme }) => theme.fonts.title02};
    color: ${({ theme }) => theme.colors.grey900};
`

const CheckboxLabel = styled.label`
    display: flex;
    cursor: pointer;
`

const CheckboxInput = styled.input`
    appearance: none;
`
const CheckboxIcon = styled.svg`
    width: 2rem;
    height: 2rem;                  
    margin-right: 2rem;
`;

const CheckboxP = styled.p`
    ${({ theme }) => theme.fonts.title03};
    color: ${({ theme }) => theme.colors.grey900};
`