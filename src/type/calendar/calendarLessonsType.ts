export interface calendarLessonsType {
  date: string;
  dayOfWeek: string;
  dailyScheduleList: {
    lessonIdx: number;
    schedule: {
      idx: number;
      studentName: string;
      subject: string;
      startTime: string;
      endTime: string;
    };
  }[];
}
