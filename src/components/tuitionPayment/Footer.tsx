import { accountNumber, bankName, moneyAmount, payingPersonName, paymentOrder } from "../../atom/tuitionPayment/tuitionPayment";
import {cycleNumberState, dateState, dayState} from '../../atom/timePicker/timePicker';
import {studentNameState, subjectNameState} from '../../atom/common/datePicker';

import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import {useRecoilState} from 'recoil';

export default function Footer() {
    const [studentName, setStudentName] = useRecoilState<string>(studentNameState);
    const [subject, setSubject] = useRecoilState<string>(subjectNameState);
    const [payment, setPayment] = useRecoilState<string>(paymentOrder);
    const [amount, setAmount] = useRecoilState<string>(moneyAmount);
    const [count, setCount] = useRecoilState(cycleNumberState);
    const [startDate, setStartDate] = useRecoilState(dateState);
    const [regularScheduleList, setRegularScheduleList] = useRecoilState(dayState);
    const [name, setName] = useRecoilState(payingPersonName);
    const [bank, setBank] = useRecoilState(bankName);
    const [number, setNumber] = useRecoilState(accountNumber);

    const isFooterGreen = name !== "" && number !== "" && bank !== "" && amount !== "";

    // post 할 데이터 구조로 만들기
    
    /*
        studentName -> studentNameState : 학생 이름
        subject -> subjectNameState : 괌고 이름
        payment -> paymentOrder : 선불/후불 여부
        amount -> moneyAmount: 과외비 (string 으로 받아서, number로 넘겨줌)
        count -> cycleNumberState : 회차 수
        startDate -> dateState : 첫 수업일
        regularScheduleList -> dayState : 확정날짜들
        account
        - name -> payingPersonName : 이름 
        - bank -> bankName : 은행명
        - number -> accountNumber : 계좌번호
        
    */
    function PostLessonInformation(){
        // 레슨 정보 post
    }
    
    return (
        <FooterWrapper>
            <FooterButtonWrapper isFooterGreen={isFooterGreen} onClick = {PostLessonInformation}>
                <FooterButton isFooterGreen={isFooterGreen}> 다음 </FooterButton>
            </FooterButtonWrapper>
        </FooterWrapper>
    );
}

const FooterWrapper = styled.div`
    height: 9rem;
`

const FooterButtonWrapper = styled.footer<{ isFooterGreen: boolean }>`
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