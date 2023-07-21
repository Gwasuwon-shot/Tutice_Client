import axios from "axios";
import { getCookie } from "./cookie";

export async function requestPaymentRecordNotification(lessonIdx: number) {
  const data = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/api/notification/payment-record/${lessonIdx}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getCookie("accessToken")}`,
    },
  });

  return data;
}
