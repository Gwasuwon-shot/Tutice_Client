import { useQuery } from "react-query";
import { getLessonDetailByParents } from "../api/getLessonDetailByParents";
import { ActionCodeOperation } from "firebase/auth";

//teacherName , account 배열 형식, [startDate, payment, amount]

export default function useGetLessonDetailByParents(lessonIdx: number) {
  const { data: lessonData } = useQuery(
    ["useGetLessonDetailByParents", lessonIdx],
    () => getLessonDetailByParents(lessonIdx),
    {
      staleTime: 300000,
    },
  );

  const teacherName = lessonData?.teacherName;
  const payment = lessonData?.payment;
  const amount = lessonData?.amount;
  const startDate = lessonData?.startDate;
  const accountName = lessonData?.account?.name;
  const accountBank = lessonData?.account?.bank;
  const accountNumber = lessonData?.account?.number;

  const formattedAmount = amount + "만원";

  const accountInfo = [accountName, accountBank, accountNumber];
  const etcInfo = [startDate, payment, formattedAmount];

  return { teacherName, accountInfo, etcInfo };
}
