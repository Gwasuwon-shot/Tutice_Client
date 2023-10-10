import { useQuery } from "react-query";
import { getAttendanceExit } from "../api/getAttendanceExit";

export default function useGetAttendanceExit(scheduleIdx: number) {
  const { data: attendanceExit } = useQuery(["getAttendanceExit", scheduleIdx], () => getAttendanceExit(scheduleIdx), {
    onError: (error) => {
      console.log(error);
    },
    staleTime: 3000,
  });

  //   const data = data?.data;

  return { attendanceExit };
}
