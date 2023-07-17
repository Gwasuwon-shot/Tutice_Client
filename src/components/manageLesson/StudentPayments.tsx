import { styled } from "styled-components";
import useGetAllPayments from "../../hooks/useGetAllPayments";
import StudentPayment from "./StudentPayment";

export default function StudentPayments() {
  const { lesson, todayDate, paymentRecordList } = useGetAllPayments();

  function checkRealDate(date: string | null) {
    return date !== null ? date : todayDate;
  }

  return (
    <StudentPaymentsWrapper>
      {paymentRecordList.map(({ idx, date, amount, status }, index) => (
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
