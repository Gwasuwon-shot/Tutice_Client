import { useQuery } from "react-query";
import { getMissingAttendanceExist } from "../api/getMissingAttendanceExist";

export default function useGetMissingAttendanceExist() {
  const { data: isMissingAttendance } = useQuery(["getMissingAttendanceExist"], getMissingAttendanceExist, {
    staleTime: 3000,
  });

  return { isMissingAttendance };
}
