import useGetAllPayments from "../../hooks/useGetAllPayments";
import StudentPayment from "./StudentPayment";

export default function StudentPayments() {
  const { lesson, todayDate, paymentRecordList } = useGetAllPayments();

  function checkRealDate(date: string | null) {
    return date ? date : todayDate;
  }

  return (
    <>
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
    </>
  );
}
