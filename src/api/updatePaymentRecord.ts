import axios from "axios";

export async function updatePaymentRecord(paymentRecordIdx: number, paymentDate: string) {
  const data = await axios.post(
    `${import.meta.env.VITE_APP_BASE_URL}/api/payment-record`,
    {
      paymentRecordIdx: 1,
      paymentDate: "2023-05-31",
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_APP_TEACHER_TOCKEN}`,
      },
    },
  );

  return data;
}
