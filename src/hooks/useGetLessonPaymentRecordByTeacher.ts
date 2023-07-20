import { useQuery } from "react-query";
import { getLessonPaymentRecordByTeacher } from "../api/getLessonPaymentRecordByTeacher";

export default function useGetLessonPaymentRecordByTeacher(manageLessonId: number) {
  //입금 내역 뷰
  const { data: payMentByTeacher } = useQuery(
    ["payMentByTeacher"],
    () => getLessonPaymentRecordByTeacher(manageLessonId),
    {
      onError: (error) => {
        console.log(error);
      },
      staleTime: 3000,
    },
  );
  console.log(payMentByTeacher);
  const lesson = payMentByTeacher?.lesson;
  const todayDate = payMentByTeacher?.todayDate;
  const paymentRecordList = payMentByTeacher?.paymentRecordList;

  return { lesson, todayDate, paymentRecordList };
}
