import { getMissingAttendanceSchedule } from "../api/getMissingAttendanceSchedule";
import { useQuery } from "react-query";

export default function useGetMissingAttendanceSchedule() {
  const { data: missingAttendanceSchedule } = useQuery(["getMissingAttendanceSchedule"], getMissingAttendanceSchedule, {
    staleTime: 300000,
  });

  return { missingAttendanceSchedule };
}
