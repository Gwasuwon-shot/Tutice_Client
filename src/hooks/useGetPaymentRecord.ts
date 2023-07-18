// import { getPaymentRecordView } from "../api/getPaymentRecordView";
// import { useQuery } from "react-query";

// export default function useGetPaymentRecord(lessonIdx: number) {
//   //   api 패칭
//   // const { lesson, paymentDate } = GET_PAYMENT_RECORD?.data;
//   const { data: paymentRecordView } = useQuery(["getPaymentRecordView"], () => getPaymentRecordView(lessonIdx), {
//     onSuccess: (res) => {
//       console.log(res);
//     },
//     onError: (err) => {
//       console.log(err);
//     },
//   });

//   return { paymentRecordView };
// }

import { GET_PAYMENT_RECORD } from "../core/manageLesson/getPaymentRecord";

export default function useGetPaymentRecord() {
  //   api 패칭
  const { lesson, paymentDate } = GET_PAYMENT_RECORD?.data;

  return { lesson, paymentDate };
}