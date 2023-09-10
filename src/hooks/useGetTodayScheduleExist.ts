import { useQuery } from "react-query";
import { getTodayScheduleExist } from "../api/getTodayScheduleExist";

export default function useGetTodayScheduleExist() {
  const { data: isTodaySchedule } = useQuery(["getTodayScheduleExist"], getTodayScheduleExist, {
    staleTime: 3000,
  });

  return { isTodaySchedule };
}
