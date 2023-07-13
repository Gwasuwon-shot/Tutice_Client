export interface LessonType {
  idx: number;
  studentName: string;
  subject: string;
}

export interface ScheduleType {
  idx: number;
  status: string;
  count: string;
  isLastCount: boolean;
}

export interface PreviewBannerScheduleType {
  lesson: LessonType;
  timeStatus: number;
  schedule: ScheduleType;
}
