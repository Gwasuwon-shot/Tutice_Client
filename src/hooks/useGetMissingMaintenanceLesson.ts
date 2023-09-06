import { useQuery } from "react-query";
import { getMissingMaintenanceLesson } from "../api/getMissingMaintenanceLesson";

export default function useGetMissingMaintenanceLesson() {
  const { data: missingMaintenanceLessonList } = useQuery(
    ["getMissingMaintenanceLesson"],
    getMissingMaintenanceLesson,
    {
      staleTime: 3000,
    },
  );

  return { missingMaintenanceLessonList };
}
