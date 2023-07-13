import { LessonType } from "./previewBannerScheduleType";

export interface ScheduleType {
  idx: number;
  startTime: string;
  endTime: string;
}

export interface UpcomingClassScheduleType {
  lesson: LessonType;
  schedule: ScheduleType;
}

export interface LatestScheduleDayType {
  date: string;
  dayOfWeek: string;
}
