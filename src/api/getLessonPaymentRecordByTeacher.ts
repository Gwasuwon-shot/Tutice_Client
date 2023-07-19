import axios from "axios";

export async function getLessonPaymentRecordByTeacher(lessonIdx: number) {
  const data = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/api/payment-record/teacher/${lessonIdx}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_APP_TEACHER_TOCKEN}`,
    },
  });

  console.log(data?.data);
  return data?.data;
}
