import useGetAllPayments from "../../hooks/useGetAllPayments";

export default function StudentPayment() {
  const { lesson, todayDate, paymentRecord } = useGetAllPayments();

  return <div>StudentPayment</div>;
}
