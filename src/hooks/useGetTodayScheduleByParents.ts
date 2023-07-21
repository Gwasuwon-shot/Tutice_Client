import { useQuery } from "react-query";
import { getTodayScheduleByParents } from "../api/getTodayScheduleByParents";

export default function useGetTodayScheduleByParents() {
  const { data: todayScheduleParents } = useQuery(["getTodayScheduleByParents"], getTodayScheduleByParents, {
    staleTime: 3000,
  });

  const scheduleList = todayScheduleParents?.scheduleList;

  return { scheduleList };
}
