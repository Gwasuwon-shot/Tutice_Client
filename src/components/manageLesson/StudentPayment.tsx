import { styled } from "styled-components";
import { RegisterPaymentManageLessonIc, SendPaymentAlarmManageLessonIc } from "../../assets";
import { PAYMENT_STATUS_IMAGE } from "../../core/manageLesson/paymentStatusImage";

interface StudentPaymentProps {
  idx: number;
  date: string;
  amount: number;
  count: number;
}

export default function StudentPayment(props: StudentPaymentProps) {
  const { idx, date, amount, count } = props;

  function checkPaymentDone() {
    return amount >= 0;
  }

  return (
    <>
      {checkPaymentDone() ? (
        <img src={PAYMENT_STATUS_IMAGE.done} alt="입금 완료 열매" />
      ) : (
        <img src={PAYMENT_STATUS_IMAGE.notYet} alt="입금 미완료 열매" />
      )}
      <p>{count}번째 열매</p>
      <p>
        {new Date(date).getMonth() + 1}월 {new Date(date).getDate() + 1}일
      </p>
      {checkPaymentDone() ? (
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
