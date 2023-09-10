import { useQuery } from "react-query";
import { getPaymentRecordCycle } from "../api/getPaymentRecordCycle";

export default function useGetPaymentRecordCycle(paymentIdx: number) {
  const { data: paymentRecordCycle } = useQuery(["getPaymentRecordCycle"], () => getPaymentRecordCycle(paymentIdx), {
    onError: (error) => {
      console.log(error);
    },
    staleTime: 3000,
  });

  const { idx, cycle, startDate, endDate } = paymentRecordCycle !== undefined && paymentRecordCycle;

  return { idx, cycle, startDate, endDate };
}
