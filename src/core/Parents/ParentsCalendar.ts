export const PARENTS_CALENDAR = {
  code: 200,
  message: "스케줄 메인 뷰 조회 성공",
  data: {
    scheduleList: [
      {
        date: "2023-07-04",
        dayOfWeek: "화",
        dailyScheduleList: [
          {
            lessonIdx: 1,
            schedule: {
              idx: 1,
              studentName: "박송현",
              subject: "수학",
              startTime: "17:00",
              endTime: "19:00",
            },
          },
          {
            lessonIdx: 2,
            schedule: {
              idx: 2,
              studentName: "이유나",
              subject: "영어",
              startTime: "19:00",
              endTime: "21:00",
            },
          },
          {
            lessonIdx: 3,
            schedule: {
              idx: 3,
              studentName: "조판다",
              subject: "국어",
              startTime: "21:00",
              endTime: "23:00",
            },
          },
        ],
      },
      {
        date: "2023-07-07",
        dayOfWeek: "금",
        dailyScheduleList: [
          {
            lessonIdx: 1,
            schedule: {
              idx: 1,
              studentName: "박송현",
              subject: "수학",
              startTime: "17:00",
              endTime: "19:00",
            },
          },
        ],
      },
    ],
  },
};
