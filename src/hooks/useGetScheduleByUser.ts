import { useState } from "react";
import { useQuery } from "react-query";
import { getScheduleByUser } from "../api/getScheduleByUser";
import { scheduleType } from "../type/scheduleType";

interface dailyScheduleListType {
  lessonIdx: number;
  schedule: scheduleType;
}
[];

interface scheduleListType {
  date: string;
  dayOfWeek: string;
  dailyScheduleList: dailyScheduleListType[];
}
[];

export default function useGetScheduleByUser(date: string): { isUserSchedule: scheduleListType[] } {
  const [isUserSchedule, setIsUserSchedule] = useState<scheduleListType[]>([]);

  const { data } = useQuery(["getScheduleByUser", date], () => getScheduleByUser(date), {
    onSuccess: (response) => {
      // setIsUserSchedule(response.data.scheduleList);
      console.log(response);
    },
    onError: (error) => {
      console.log(error);
    },
    staleTime: 300000,
  });

  return { isUserSchedule };
}
