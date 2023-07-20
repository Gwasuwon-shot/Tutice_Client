import { useQuery } from "react-query";
import { getTodayScheduleByParents } from "../api/getTodayScheduleByParents";

export default function useGetTodayScheduleByParents() {
  const { data: todayScheduleParents } = useQuery(["getTodayScheduleByParents"], getTodayScheduleByParents, {
    staleTime: 300000,
  });

  console.log(todayScheduleParents);
  return { todayScheduleParents };
}
