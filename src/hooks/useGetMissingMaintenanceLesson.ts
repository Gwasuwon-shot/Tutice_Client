import { getMissingMaintenanceLesson } from "../api/getMissingMaintenanceLesson";
import { useQuery } from "react-query";

export default function useGetMissingMaintenanceLesson() {
  const { data : missingMaintenanceLessonList } = useQuery(["getMissingMaintenanceLesson"], getMissingMaintenanceLesson, {
    staleTime: 3000,
  });

  return { missingMaintenanceLessonList };
}
