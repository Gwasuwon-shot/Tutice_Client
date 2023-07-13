export interface LessonType {
  idx: number;
  studentName: string;
  subject: string;
  count?: string;
}

export interface ScheduleType {
  idx: number;
  status: string;
}

export interface PreviewBannerScheduleType {
  lesson: LessonType;
  timeStatus: number;
  schedule: ScheduleType;
}
