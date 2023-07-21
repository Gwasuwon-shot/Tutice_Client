import axios from "axios";
import { RegisterPaymentTpye } from "../type/manageLesson/registerPaymentType";

export async function updatePaymentRecord(paymentData: RegisterPaymentTpye) {
  console.log(paymentData?.paymentDate);
  const data = await axios.patch(`${import.meta.env.VITE_APP_BASE_URL}/api/payment-record`, paymentData, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_APP_TEACHER_TOCKEN}`,
    },
  });

  return data;
}
