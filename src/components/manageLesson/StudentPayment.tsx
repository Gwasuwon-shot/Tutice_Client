import { styled } from "styled-components";
import { RegisterPaymentManageLessonIc, SendPaymentAlarmManageLessonIc } from "../../assets";
import { PAYMENT_STATUS_IMAGE } from "../../core/manageLesson/paymentStatusImage";

interface StudentPaymentProps {
  idx: number;
  date: string;
  amount: number;
  status: boolean;
  count: number;
}

export default function StudentPayment(props: StudentPaymentProps) {
  const { idx, date, amount, status, count } = props;

  return (
    <>
      {status ? (
        <img src={PAYMENT_STATUS_IMAGE.done} alt="입금 완료 열매" />
      ) : (
        <img src={PAYMENT_STATUS_IMAGE.notYet} alt="입금 미완료 열매" />
      )}
      <p>{count}번째 열매</p>
      <p>
        {new Date(date).getMonth() + 1}월 {new Date(date).getDate() + 1}일
      </p>
      {status ? (
        <p>{amount}</p>
      ) : (
        <>
          <SendPaymentAlarmManageLessonIcon />
          <RegisterPaymentManageLessonIcon />
        </>
      )}
    </>
  );
}

const SendPaymentAlarmManageLessonIcon = styled(SendPaymentAlarmManageLessonIc)`
  width: 5.5rem;
`;

const RegisterPaymentManageLessonIcon = styled(RegisterPaymentManageLessonIc)`
  width: 5.5rem;
`;
