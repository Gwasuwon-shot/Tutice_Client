import { MISSING_MAINTEANANCE_LESSON } from "../core/manageLesson/getMissingMaintenanceLesson";
import React from "react";

export default function useExtensionLesson() {
  const { missingMaintenanceLessonList } = MISSING_MAINTEANANCE_LESSON.data;

  return { missingMaintenanceLessonList };
}
