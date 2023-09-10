import { useQuery } from "react-query";
import { getTodayDate } from "../api/getTodayDate";

export default function useGetTodayDate() {
  const { data: todayDate } = useQuery(["getTodayDate"], getTodayDate, {
    staleTime: 3000,
  });

  return { todayDate };
}
