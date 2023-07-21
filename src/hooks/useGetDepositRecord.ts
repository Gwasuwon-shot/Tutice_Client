import { useQuery } from "react-query";
import { getDepositRecord } from "../api/getDepositRecord";
import { DepositInfoType } from "../type/lessonRecord/lessonRecord";

export default function useGetDepositRecord(lessonId: number) {
  const { data: depositRecord } = useQuery(["depositRecord"], () => getDepositRecord(lessonId), {
    onError: (error) => {
      console.error(error);
    },
    staleTime: 3000,
  });

  const studentName = depositRecord?.lesson?.studentName;
  const teacherName = depositRecord?.lesson?.teacherName;
  const subjectName = depositRecord?.lesson?.subject;

  const paymentRecordList = depositRecord?.paymentRecordList;

  return {
    studentName,
    teacherName,
    subjectName,
    paymentRecordList,
  };
}
