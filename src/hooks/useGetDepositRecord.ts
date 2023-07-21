import { useQuery } from "react-query";
import { getDepositRecord } from "../api/getDepositRecord";
import { DepositInfoType } from "../type/lessonRecord/lessonRecord";

export default function useGetDepositRecord(lessonId: number) {
  // 선생님 : 메인페이지 뷰 (홈)- 오늘의 수업/곧 다가오는 수업
  //   api 패칭
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
