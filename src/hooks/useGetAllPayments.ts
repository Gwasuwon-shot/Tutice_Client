import { GET_LESSON_PAYMENT_RECORD_BY_TEACHER } from "../core/manageLesson/getLessonPaymentRecordByTeacher";

export default function useGetAllPayments() {
  //   api 패칭
  const { lesson, todayDate, paymentRecordList } = GET_LESSON_PAYMENT_RECORD_BY_TEACHER?.data;

  return { lesson, todayDate, paymentRecordList };
}
