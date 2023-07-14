interface StudentPaymentProps {
  idx: number;
  date: string;
  amount: number;
}

export default function StudentPayment(props: StudentPaymentProps) {
  const { idx, date, amount } = props;

  return <div>StudentPayment</div>;
}
