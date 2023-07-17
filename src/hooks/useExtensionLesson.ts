import React from "react";
import { MISSING_MAINTEANANCE_LESSON } from "../core/manageLesson/getMissingMaintenanceLesson";

export default function useExtensionLesson() {
  const { missingMaintenanceLessonList } = MISSING_MAINTEANANCE_LESSON.data;

  return { missingMaintenanceLessonList };
}
