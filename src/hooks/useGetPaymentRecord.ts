import { GET_PAYMENT_RECORD } from "../core/manageLesson/getPaymentRecord";

export default function useGetPaymentRecord() {
  //   api 패칭
  const { lesson, paymentDate } = GET_PAYMENT_RECORD?.data;

  return { lesson, paymentDate };
}
