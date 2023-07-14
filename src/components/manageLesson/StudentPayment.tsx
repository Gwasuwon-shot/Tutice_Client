import { PAYMENT_STATUS_IMAGE } from "../../core/manageLesson/paymentStatusImage";

interface StudentPaymentProps {
  idx: number;
  date: string;
  amount: number;
}

export default function StudentPayment(props: StudentPaymentProps) {
  const { idx, date, amount } = props;

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
    </>
  );
}
