import { useQuery } from "react-query";
import { getMissingMaintenanceExist } from "../api/getMissingMaintenanceExist";

export default function useGetMissingMaintenanceExist() {
  const { data: isMissingMaintenance } = useQuery(["getMissingMaintenanceExist"], getMissingMaintenanceExist, {
    staleTime: 3000,
  });

  return { isMissingMaintenance };
}
