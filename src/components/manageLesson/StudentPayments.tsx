import { useEffect } from "react";
import useGetAllPayments from "../../hooks/useGetAllPayments";

export default function StudentPayments() {
  const { lesson, todayDate, paymentRecord } = useGetAllPayments();
  const { cycle } = lesson;
  const { paymentRecordList } = paymentRecord;
  const allPaymentRecords = [...paymentRecordList];

  useEffect(() => {
    // 이미 입금완료된 리스트만 있는 paymentRecordList에 입금이 필요한 리스트를 채워넣는 작업
    if (paymentRecordList.length < cycle) {
      new Array(cycle - paymentRecordList.length)
        .fill(0)
        .map((idx) => allPaymentRecords.unshift({ idx: idx, date: `${todayDate}`, amount: -1 }));
    }
  }, []);

  console.log(allPaymentRecords);

  return <>{}</>;
}
