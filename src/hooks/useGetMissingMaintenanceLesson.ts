import { getMissingMaintenanceLesson } from "../api/getMissingMaintenanceLesson";
import { useQuery } from "react-query";

export default function useGetMissingMaintenanceLesson() {
  const { data } = useQuery(["getMissingMaintenanceLesson"], getMissingMaintenanceLesson, {
    staleTime: 300000,
  });

  const missingMaintenanceLessonList= data?.missingAttendanceList;

  console.log(missingMaintenanceLessonList);

  return { missingMaintenanceLessonList };
}