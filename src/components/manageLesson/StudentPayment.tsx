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
      <div>
        <FruitCount>{count}번째 열매</FruitCount>
        <Date>
          {new window.Date(date).getMonth() + 1}월 {new window.Date(date).getDate() + 1}일
        </Date>
      </div>
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

const Date = styled.p`
  color: ${({ theme }) => theme.colors.grey600};
  ${({ theme }) => theme.fonts.body05};
`;

const FruitCount = styled.p`
  color: ${({ theme }) => theme.colors.grey900};
  ${({ theme }) => theme.fonts.body02};
`;

const SendPaymentAlarmManageLessonIcon = styled(SendPaymentAlarmManageLessonIc)`
  width: 5.5rem;
`;

const RegisterPaymentManageLessonIcon = styled(RegisterPaymentManageLessonIc)`
  width: 5.5rem;
`;
