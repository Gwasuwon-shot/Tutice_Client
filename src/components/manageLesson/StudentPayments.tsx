import { useEffect, useState } from "react";
import useGetAllPayments from "../../hooks/useGetAllPayments";
import StudentPayment from "./StudentPayment";

interface PaymentRecordsType {
  idx: number;
  date: string;
  amount: number;
}

export default function StudentPayments() {
  const { lesson, todayDate, paymentRecord } = useGetAllPayments();
  const { cycle } = lesson;
  const { paymentRecordList } = paymentRecord;
  const [allPaymentRecords, setAllPaymentRecords] = useState<PaymentRecordsType[]>([]);

  useEffect(() => {
    // 이미 입금완료된 리스트만 있는 paymentRecordList에 입금이 필요한 리스트를 채워넣는 작업
    if (paymentRecordList.length < cycle) {
      const copyPaymentRecordList = [...paymentRecordList];
      new Array(cycle - paymentRecordList.length)
        .fill(0)
        .forEach((val, index) => copyPaymentRecordList.unshift({ idx: index, date: `${todayDate}`, amount: -1 }));

      setAllPaymentRecords(copyPaymentRecordList);
    }
  }, []);

  console.log(allPaymentRecords);

  return (
    <>
      {allPaymentRecords.map(({ idx, date, amount }) => (
        <StudentPayment key={idx} idx={idx} date={date} amount={amount} />
      ))}
    </>
  );
}
