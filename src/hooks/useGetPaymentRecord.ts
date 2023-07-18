import { useQuery } from "react-query";
import { getPaymentRecordView } from "../api/getPaymentRecordView";

export default function useGetPaymentRecord(lessonIdx: number) {
  //   api 패칭
  // const { lesson, paymentDate } = GET_PAYMENT_RECORD?.data;
  const { data: paymentRecordView } = useQuery(["getPaymentRecordView"], () => getPaymentRecordView(lessonIdx), {
    onSuccess: (res) => {
      console.log(res);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  return { paymentRecordView };
}
