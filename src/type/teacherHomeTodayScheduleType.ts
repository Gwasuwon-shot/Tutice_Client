interface LessonType {
  idx: number;
  studentName: string;
  subject: string;
  count: string;
}

interface ScheduleType {
  idx: number;
  status: string;
}

export interface TeacherHomeTodayScheduleType {
  lesson: LessonType;
  timeStatus: number;
  schedule: ScheduleType;
}
