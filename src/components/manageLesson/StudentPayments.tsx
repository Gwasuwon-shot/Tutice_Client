import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import useGetLessonPaymentRecordByTeacher from "../../hooks/useGetLessonPaymentRecordByTeacher";
import { PaymentRecordType } from "../../type/manageLesson/payMentRecordType";
import StudentPayment from "./StudentPayment";

export default function StudentPayments() {
  const { manageLessonId } = useParams();
  const { lesson, todayDate, paymentRecordList } = useGetLessonPaymentRecordByTeacher(Number(manageLessonId)); //lessonIdx 넣어주어야함
  // const { lesson, todayDate, paymentRecordList } = useGetAllPayments();

  function checkRealDate(date: string | null) {
    return date !== null ? date : todayDate;
  }

  return (
    <StudentPaymentsWrapper>
      {paymentRecordList?.map(({ idx, date, amount, status }: PaymentRecordType, index: number) => (
        <StudentPayment
          key={idx}
          idx={idx}
          date={checkRealDate(date)}
          amount={amount}
          status={status}
          count={Math.abs(index - paymentRecordList.length)}
        />
      ))}
    </StudentPaymentsWrapper>
  );
}

const StudentPaymentsWrapper = styled.section`
  margin-top: 1.6rem;
`;
