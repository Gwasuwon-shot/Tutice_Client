import { accountNumber, bankName, moneyAmount, lessonCodeAndPaymentId, payingPersonName, paymentOrder } from "../../atom/tuitionPayment/tuitionPayment";
import {cycleNumberState, dateState, dayState} from '../../atom/timePicker/timePicker';
import {studentNameState, subjectNameState} from '../../atom/common/datePicker';
import { useNavigate } from "react-router-dom";
import {createLesson} from '../../api/createLesson';
import styled from 'styled-components';
import {useMutation} from 'react-query';
import {useRecoilState} from 'recoil';

interface scheduleListProps {
    dayOfWeek: string,
    startTime: string,
    endTime: string,
}

interface createLessonProps {
    lesson : {
        studentName: string,
        subject: string,
        payment: string,
        amount: number,
        count: number,
        startDate: string,
        regularScheduleList: scheduleListProps[],
    },
    account: {
        name: string,
        bank: string,
        number: string,
    }
}


export default function Footer() {
    const [studentName, setStudentName] = useRecoilState<string>(studentNameState);
    const [subject, setSubject] = useRecoilState<string>(subjectNameState);
    const [payment, setPayment] = useRecoilState<string>(paymentOrder);
    const [amount, setAmount] = useRecoilState<number>(moneyAmount);
    const [count, setCount] = useRecoilState<number>(cycleNumberState);
    const [startDate, setStartDate] = useRecoilState(dateState);
    const [regularScheduleList, setRegularScheduleList] = useRecoilState(dayState);
    const [name, setName] = useRecoilState(payingPersonName);
    const [bank, setBank] = useRecoilState(bankName);
    const [number, setNumber] = useRecoilState(accountNumber);
    const [codeAndId, setCodeAndId] = useRecoilState(lessonCodeAndPaymentId);

    const isFooterGreen = name !== "" && number !== "" && bank !== "" && amount !== 0;

    const postStartDate = String(startDate.year) + "-" + String(startDate.month).padStart(2, "0") + "-" + String(startDate.date).padStart(2, "0");
    
    // post 할 데이터 구조로 만들기
    const postInformation = {
        "lesson": {
            "studentName": studentName,
            "subject": subject,
                "payment": payment,
                "amount" : Number(amount),
                "count": count,
                "startDate": postStartDate, 
                "regularScheduleList": regularScheduleList,
                },
            "account": {
                "name": name,
                "bank": bank,
                "number": number,
            }
    }
   
    const navigate = useNavigate();

    function handleMoveToLessonShare() {
      navigate("/lesson-share");
    }

    const {mutate: createNewLesson} = useMutation( 
        createLesson,
        {
            onSuccess: (response) => {
                console.log('성공');
                setCodeAndId(response);
                // setStartDate(response.) -> 지수에 전달한 data recoil 저장
                handleMoveToLessonShare();
            },
            onError: (error) => console.log(error),
        },
    )

    function PostLessonInformation (info : createLessonProps) { 
        createNewLesson(info);
    }
    
    return (
        <FooterWrapper>
            <FooterButtonWrapper isFooterGreen={isFooterGreen} onClick = { () => PostLessonInformation(postInformation)}>
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